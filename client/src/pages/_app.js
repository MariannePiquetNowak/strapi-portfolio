import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Marianne Piquet-Nowak's personal website"
        />
        <title>Marianne Piquet-Nowak | Full-Stack Developer</title>
      </Head>
    <div className="md:flex flex-col md:flex-row relative">
      <Loader />
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    </>
  );
}
