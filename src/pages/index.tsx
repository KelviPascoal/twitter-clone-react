import type { NextPage } from "next";
import Head from "next/dist/shared/lib/head";
import { Layout } from "../layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KelviPascoal (@KelviPascoal) / Twitter</title>
        <meta
          name="description"
          content="perfil do usuario KelviPascoal"
          key="KelviPascoal"
        />
      </Head>
      <Layout />
    </>
  );
};

export default Home;
