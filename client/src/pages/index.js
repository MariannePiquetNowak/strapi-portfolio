import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log(props)
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


// Use the method getStaticProps to get socials in API
// export const getStaticProps = async () => {
//     const response = await fetch('http://localhost:1337/api/socials');
//     const data = await response.json();
//     const socials = data.data;
  
//     return {
//       props: {
//         users: socials,
//       },
//     };
//   };



