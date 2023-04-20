import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Marianne Piquet-Nowak's personal website" />
            <title>Marianne Piquet-Nowak | Full-Stack Developer</title>
        </Head>
        <div>Coucou</div>
    </>
  )
}
