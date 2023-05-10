import React from "react";
import Image from "next/image";

const Skills = ({ skills, skillIcons, skillsDesc }) => {
  return (
    <section
      id="Skills"
      className="reveal p-6 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
    >
      <div className="xl:px-[2em] flex flex-col items-center justify-end lg:flex-row-reverse lg:h-auto w-full">
        <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em] lg:absolute lg:z-20 lg:end-1">
          <Image
            src={`https://admin.mariannepiquet.fr${skills?.attributes.image.data.attributes.url}`}
            className="image-section__skills w-full h-auto"
            width={250}
            height={100}
            alt="Marianne Piquet-Nowak puzzle illustration"
          />
        </div>
        <div className="info py-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6 lg:absolute lg:z-20">
          <div className="flex items-end mb-8">
            <Image
              src={`/images/arrow-circle-gradient.svg`}
              className="arow-circle w-9 h-9 md:w-14 md:h-14 lg:mb-2 mr-2 md:mr-3"
              width={10}
              height={10}
              alt="arrow-circle"
            />
            <h1>{skills?.attributes.title}</h1>
          </div>
          <h2>{skills?.attributes.sub_title}</h2>
          <p dangerouslySetInnerHTML={{ __html: skillsDesc }}></p>
          <div>
            <ul className="test flex flex-wrap justify-start pt-6 md:pt-10">
              {skillIcons?.map((skillIcon) => (
                <li key={skillIcon.id} className="my-2 mr-3">
                  <a href={`${skillIcon.attributes.url}`}>
                    <Image
                      src={`https://admin.mariannepiquet.fr${skillIcon.attributes.icon.data.attributes.url}`}
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
  );
};

export default Skills;
