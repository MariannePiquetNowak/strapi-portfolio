import React from "react";
import Image from "next/image";

const Experiences = ({experiences, xp}) => {
  return (
    <section
      id="Experience"
      className="reveal p-6 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
    >
      <div className="xl:px-[2em] flex flex-col items-center justify-end lg:flex-row-reverse lg:h-full w-full">
        <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em] lg:absolute lg:z-20 lg:end-1">
          <Image
            src={`https://admin.mariannepiquet.fr${experiences?.attributes.image.data.attributes.url}`}
            className="image-section__experience w-full h-auto"
            width={250}
            height={100}
            alt="Marianne Piquet-Nowak Experience illustration"
          />
        </div>

        <div className="info pt-5 lg:w-4/5 xl:w-2/4 lg:auto lg:mr-6 lg:absolute lg:z-20 w-full">
          <div className="flex items-end mb-8">
            <Image
              src={`/images/arrow-circle-gradient.svg`}
              className="arrow-circle w-9 h-9 md:w-14 md:h-14 lg:mb-2 mr-2 md:mr-3"
              width={10}
              height={10}
              alt="arrow-circle"
            />
            <h1>{experiences?.attributes?.title}</h1>
          </div>
          <div className="xp-content w-full mt-5">
            <div className="xp-buttons flex flex-row overflow-hidden">
              {experiences?.attributes.experiences?.data?.map((xp, index) => {
                return (
                  <button
                    key={`btn-${index}`}
                    className="btn p-2"
                    id={`btn-${index}`}
                  >
                    {xp?.attributes.name_agency}
                  </button>
                );
              })}
            </div>

            <div key={`experience-${xp?.id}`} className="xp-info pt-5 md:p-5">
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
  );
};

export default Experiences;
