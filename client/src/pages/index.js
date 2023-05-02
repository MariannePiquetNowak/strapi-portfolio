import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ about, skills, skillIcons, experiences }) {
  /*  
    To explain, the problem I'm having is when I get the description, breaks line are not render 
    To work around this, I could use the property dangerouslySetInnerHTML (<p> tags)
    But there are a hydration problem. It's the reason I use useState & useEffect hooks
    */
  const [aboutDesc, setAboutDesc] = useState(null);
  const [skillsDesc, setSkillsDesc] = useState(null);
  const [xp, setExperience] = useState(null);
  const size = useWindowSize();

  useEffect(() => setAboutDesc(about?.attributes.description));
  useEffect(() => setSkillsDesc(skills?.attributes.description));

  /* Intersection observer */
  const options = {
    rootMargin: "-40% 0px",
    threshold: 0,
  };

  const t = { rootMargin: "0px", threshold: 0 };

  useEffect(() => {
    const blocks = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    blocks.forEach((block) => {
      observer.observe(block);
    });
  }, []);

  useEffect(() => {
    const firstBtn = document.querySelector(".btn");
    firstBtn.classList.add("active");
    experiences?.attributes.experiences.data?.map((xp) => {
      xp?.attributes.name_agency === firstBtn.textContent
        ? setExperience(xp)
        : null;
    });
  });

  useEffect(() => {
    // Ajouter la classe active au bouton cliqué
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btns.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
        experiences?.attributes.experiences.data?.map((xp) => {
          xp?.attributes.name_agency === e.target.textContent
            ? setExperience(xp)
            : null;
        });
      });
    });
  }, []);

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
        className="p-6 my-16 md:m-10 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
      >
        <div className="xl:px-[2em] flex flex-col items-center justify-between lg:flex-row-reverse lg:w-full lg:h-auto">
          <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em]">
            <Image
              src={`http://localhost:1337${about?.attributes.image.data.attributes.url}`}
              className="image-section__about w-full h-auto"
              width={250}
              height={100}
              alt="Marianne Piquet-Nowak Avatar"
            />
          </div>
          <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:h-auto lg:mr-6">
            <span>Hi! My Name is</span>
            <h1>{about?.attributes.title}</h1>
            <h2>{about?.attributes.sub_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: aboutDesc }}></p>
          </div>
        </div>
      </section>
      <section
        id="Skills"
        className="reveal p-6 my-16 mx-10 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
      >
        <div className="xl:px-[2em] flex flex-col items-center justify-end lg:flex-row-reverse lg:h-auto lg:w-full">
          <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em] lg:absolute lg:z-20 lg:end-1">
            <Image
              src={`http://localhost:1337${skills?.attributes.image.data.attributes.url}`}
              className="image-section__skills w-full h-auto"
              width={250}
              height={100}
              alt="Marianne Piquet-Nowak puzzle illustration"
            />
          </div>
          <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6 lg:absolute lg:z-20">
            <div className="flex items-end">
              <Image
                src={`/images/arrow-circle-gradient.svg`}
                className="image-section__skills w-9 h-9 md:w-14 md:h-14 lg:mb-2 mr-2 md:mr-3"
                width={10}
                height={10}
                alt="Marianne Piquet-Nowak puzzle illustration"
              />
              <h1>{skills?.attributes.title}</h1>
            </div>
            <h2>{skills?.attributes.sub_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: skillsDesc }}></p>
            <div>
              <ul className="test flex flex-wrap justify-start py-2">
                {skillIcons?.map((skillIcon) => (
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
      <section
        id="Experience"
        className="reveal p-6 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
      >
        <div className="xl:px-[2em] flex flex-col items-center justify-end lg:flex-row-reverse lg:h-auto w-full">
          <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em] lg:absolute lg:z-20 lg:end-1">
            <Image
              src={`http://localhost:1337${experiences?.attributes.image.data.attributes.url}`}
              className="image-section__experience w-full h-auto"
              width={250}
              height={100}
              alt="Marianne Piquet-Nowak Experience illustration"
            />
          </div>

          <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6 lg:absolute lg:z-20 w-full">
            <div className="flex items-end">
              <Image
                src={`/images/arrow-circle-gradient.svg`}
                className="image-section__experiences w-9 h-9 md:w-14 md:h-14 lg:mb-2 mr-2 md:mr-3"
                width={10}
                height={10}
                alt="Marianne Piquet-Nowak Experience illustration"
              />
              <h1>{experiences?.attributes?.title}</h1>
            </div>
            <div className="w-full my-5">
              <div className="xp-buttons flex flex-row">
                {experiences?.attributes.experiences.data?.map((xp) => {
                  return (
                    <button key={`btn-${xp?.id}`} className="btn p-2">
                      {xp?.attributes.name_agency}
                    </button>
                  );
                })}
              </div>

              <div key={`experience-${xp?.id}`} className="xp-info py-10 md:p-5">
                <h3 className="text-white font-bold underline decoration-1 decoration-solid underline-offset-4">
                  {xp?.attributes.title_agency.toUpperCase()}
                </h3>
                <p className="pb-2">{xp?.attributes.date}</p>
                <ul className="my-2 ml-5">
                  {xp?.attributes.tasks.data?.map((task) => (
                    <li className="task text-xs">
                      {task?.attributes.description}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="Projects">Projects Section</section>
      <section className="Contact">Contact Section</section>
    </>
  );
}

// Use the method getStaticProps to get socials in API
export const getStaticProps = async () => {
  const aboutRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}about?populate=*`
  );
  const aboutData = await aboutRes.json();
  const about = aboutData.data;

  const skillsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}skill?populate=*&populate=image&populate=skill_icons.icon`
  );
  const skillsData = await skillsRes.json();
  const skills = skillsData.data;

  const experienceRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}work-section?populate=*&populate=image&populate=experiences.tasks`
  );
  const experienceData = await experienceRes.json();
  const experiences = experienceData.data;

  return {
    props: {
      about: about,
      skills: skills,
      skillIcons: skills.attributes.skill_icons.data,
      experiences: experiences,
    },
  };
};

// Get image in relation field => comment by andrew-braun
// https://forum.strapi.io/t/no-image-in-the-api-response/13281/5
