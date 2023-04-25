import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div className="md:flex md:flex-row">
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
