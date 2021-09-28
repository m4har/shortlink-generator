import { useEffect } from "react";
import Head from "next/head";

const ShortLink = (props) => {
  useEffect(() => {
    window.location.replace(props?.data?.url || "/");
  }, []);
  return (
    <>
      <Head>
        <title>redirect</title>
      </Head>
    </>
  );
};

export default ShortLink;

export async function getServerSideProps({ query }) {
  const id = query.id;

  const { getUrl } = require("../../services/sheet-api");
  const data = await getUrl(id);

  return { props: { data } };
}
