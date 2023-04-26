import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div className="md:flex flex-col md:flex-row relative">
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
