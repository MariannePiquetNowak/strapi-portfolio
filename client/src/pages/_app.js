import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
