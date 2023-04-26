import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ about }) {
  /*  
    To explain, the problem I'm having is when I get the description, breaks line are not render 
    To work around this, I could use the property dangerouslySetInnerHTML (<p> tags)
    But there are a hydration problem. It's the reason I use useState & useEffect hooks
    */
  const [desc, setDesc] = useState(null)
  useEffect(() => setDesc(about.attributes.description))

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
      <section id="About" className="p-6 md:m-10 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-screen">
        <div className="flex flex-col items-center justify-around lg:flex-row-reverse lg:h-auto">
          <div className="image-section flex justify-center w-80 h-80 lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em]">
            <Image
              src={`http://localhost:1337${about.attributes.image.data.attributes.url}`}
              className="image-section__about w-full"
              width={250}
              height={100}
              alt="Marianne Piquet-Nowak Avatar"
            />
          </div>
          <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6">
            <span>Hi! My Name is</span>
            <h1>{about.attributes.title}</h1>
            <h2>{about.attributes.sub_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: desc }}></p>
          </div>
        </div>
      </section>
      <section className="Skills h-screen">Skills Section</section>
      <section className="Experiences">Experiences Section</section>
      <section className="Projects">Projects Section</section>
      <section className="Contact">Contact Section</section>
    </>
  )
}

// Use the method getStaticProps to get socials in API
export const getStaticProps = async () => {
  const response = await fetch('http://localhost:1337/api/about?populate=*')
  const data = await response.json()
  const about = data.data

  return {
    props: {
      about: about,
    },
  }
}
