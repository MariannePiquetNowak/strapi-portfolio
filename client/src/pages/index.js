import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home({
  about,
  skills,
  skillIcons,
  experiences,
  projects,
}) {
  /*  
    To explain, the problem I'm having is when I get the description, breaks line are not render 
    To work around this, I could use the property dangerouslySetInnerHTML (<p> tags)
    But there are a hydration problem. It's the reason I use useState & useEffect hooks
    */
  const [aboutDesc, setAboutDesc] = useState(null);
  const [skillsDesc, setSkillsDesc] = useState(null);
  const [xp, setExperience] = useState(null);

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
  }, []);

  console.log(xp)

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
    <div>
      
      <About about={about} aboutDesc={aboutDesc} />

      <Skills skills={skills} skillIcons={skillIcons} skillsDesc={skillsDesc} />

      <Experiences experiences={experiences} xp={xp} />

      <Projects projects={projects} />

      <Contact />
    </div>
  );
}

// Use the method getStaticProps to get socials in API
export const getStaticProps = async () => {
  const aboutRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}about?populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).catch((error) => {
    console.log(
      `Il y a eu une erreur lors de la récupération des données : ${error}`
    );
  });
  const aboutData = await aboutRes.json();
  const about = aboutData.data;

  const skillsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}skill?populate=*&populate=image&populate=skill_icons.icon`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).catch((error) => {
    console.log(
      `Il y a eu une erreur lors de la récupération des compétences : ${error}`
    );
  });
  const skillsData = await skillsRes.json();
  const skills = skillsData.data;

  const experienceRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}work-section?populate=*&populate=image&populate=experiences.tasks`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).catch((error) => {
    console.log(
      `Il y a eu une erreur lors de la récupération des expériences : ${error}`
    );
  });
  const experienceData = await experienceRes.json();
  const experiences = experienceData.data;

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}projects?populate=*&populate=image&populate=tools&populate=versionnings.icon`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).catch((error) => {
    console.log(
      `Il y a eu une erreur lors de la récupération des projets : ${error}`
    );
  });
  const projectData = await projectRes.json();
  const projects = projectData.data;

  return {
    props: {
      about: about,
      skills: skills,
      skillIcons: skills.attributes.skill_icons.data,
      experiences: experiences,
      projects: projects,
    },
  };
};

// Get image in relation field => comment by andrew-braun
// https://forum.strapi.io/t/no-image-in-the-api-response/13281/5
