const randomId = require("../../libs/random-id").default;
const { newShortLink } = require("../../services/sheet-api");

export default function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      const { url } = body;

      const id = randomId();

      newShortLink({ url, id });

      return res.status(200).json({ message: "success", data: { url, id } });
    } catch (error) {
      return res.status(422).json({ message: error });
    }
  }

  return res.status(200).json({ name: "John Doe" });
}
