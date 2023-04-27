import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ about, skills, skillIcons }) {
  // Add Loading state at the end of the Home page

  /*  
    To explain, the problem I'm having is when I get the description, breaks line are not render 
    To work around this, I could use the property dangerouslySetInnerHTML (<p> tags)
    But there are a hydration problem. It's the reason I use useState & useEffect hooks
    */
  const [aboutDesc, setAboutDesc] = useState(null)
  const [skillsDesc, setSkillsDesc] = useState(null)
  const ref = useRef();

  useEffect(() => setAboutDesc(about.attributes.description))
  useEffect(() => setSkillsDesc(skills.attributes.description))

  /* Intersection observer */
  const options = {
    rootMargin: '-40% 0px',
    threshold: 0,
  }

  const t = { rootMargin: "0px", threshold: 0,}

  useEffect(() => {
    const blocks = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    blocks.forEach((block) => {
      observer.observe(block)
    })
  }, [])

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
      <section
        id="About"
        className="test p-6 md:m-10 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
      >
        <div className="xl:px-[2em] flex flex-col items-center justify-between lg:flex-row-reverse lg:h-auto">
          <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em]">
            <Image
              src={`http://localhost:1337${about.attributes.image.data.attributes.url}`}
              className="image-section__about w-full h-auto"
              width={250}
              height={100}
              alt="Marianne Piquet-Nowak Avatar"
            />
          </div>
          <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6">
            <span>Hi! My Name is</span>
            <h1>{about.attributes.title}</h1>
            <h2>{about.attributes.sub_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: aboutDesc }}></p>
          </div>
        </div>
      </section>
      <section
        id="Skills"
        className="reveal p-6 my-16 mx-10 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px] lg:relative"
      >
        <div className="xl:px-[2em] flex flex-col items-center justify-end lg:flex-row-reverse lg:h-auto lg:w-full">
          <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em] lg:absolute z-10 lg:end-1">
            <Image
              src={`http://localhost:1337${skills.attributes.image.data.attributes.url}`}
              className="image-section__skills w-full h-auto"
              width={250}
              height={100}
              alt="Marianne Piquet-Nowak puzzle illustration"
            />
          </div>
          <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6 lg:absolute z-20">
            <h1>{skills.attributes.title}</h1>
            <h2>{skills.attributes.sub_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: skillsDesc }}></p>
            <div>
              <ul className="test flex flex-wrap justify-start py-2">
                {skillIcons.map((skillIcon) => (
                  <li key={skillIcon.id} className="my-2 mr-3">
                    <a href={`${skillIcon.attributes.url}`}>
                      <Image
                        src={`http://localhost:1337${skillIcon.attributes.icon.data.attributes.url}`}
                        className="w-7 h-7 md:w-10 md:h-10"
                        width={10}
                        height={10}
                        alt={skillIcon.attributes.name}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="Experiences reveal">Experiences Section</section>
      <section className="Projects">Projects Section</section>
      <section className="Contact">Contact Section</section>
    </>
  )
}

// Use the method getStaticProps to get socials in API
export const getStaticProps = async () => {
  const aboutRes = await fetch('http://localhost:1337/api/about?populate=*')
  const aboutData = await aboutRes.json()
  const about = aboutData.data

  const skillsRes = await fetch('http://localhost:1337/api/skill?populate=*')
  const skillsData = await skillsRes.json()
  const skills = skillsData.data

  const skillIconsRes = await fetch(
    'http://localhost:1337/api/skill-icons?populate=*',
  )
  const skillIconsData = await skillIconsRes.json()
  const skillIcons = skillIconsData.data

  return {
    props: {
      about: about,
      skills: skills,
      skillIcons: skillIcons,
    },
  }
}
