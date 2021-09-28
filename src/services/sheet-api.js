import { google } from "googleapis";
import csv2Json from "../libs/csv-to-json";

async function getAccessSheet() {
  let sheet;
  if (!sheet) {
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
      },
    });
    sheet = google.sheets({ version: "v4", auth });
  }
  return sheet;
}

export async function getUrl(param) {
  try {
    const range = "Sheet1!A1:C";
    const sheets = await getAccessSheet();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    const data = csv2Json(response.data.values || []).find(
      (i) => i.id === param
    );

    return data;
  } catch (error) {
    return {};
  }
}

export async function newShortLink(data) {
  const { url, id } = data;
  const sheets = await getAccessSheet();
  await sheets.spreadsheets.values.append(
    {
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[id, url, new Date().toISOString()]],
      },
    },
    (err) => {
      if (err) throw err;
    }
  );
}
