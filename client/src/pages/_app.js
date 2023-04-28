import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }) {
  return (
    <div className="md:flex flex-col md:flex-row relative">
      <Loader />
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
