import React, { useState, useEffect } from "react";
import Image from "next/image";

const Projects = ({ projects }) => {

  useEffect(() => {
    // Ajouter la classe .close aux éléments à partir de l'index 3 de la liste
    const projectsList = document.querySelectorAll(".project");
    projectsList.forEach((project, index) => {
      if (index >= 2) {
        project.classList.add("no-more-projects");
      }
    });
  }, [projects]);

  const handleProjects = () => {
    const projectsList = document.querySelectorAll(".project");
    const btnSeeMore = document.querySelector(".see-more-project");
    projectsList.forEach((project, index) => {
      if (index >= 2) {
        project.classList.remove("no-more-projects");
        btnSeeMore.classList.add("dont-show");
      }
    });
  };

  return (
    <section
      id="Projects"
      className="reveal p-6 md:p-8 xl:mx-0 flex flex-col items-center justify-center"
    >
      <div className="xl:px-[2em]">
        <div className="info py-5 lg:mr-6 w-full">
          <div className="flex items-end">
            <Image
              src={`/images/arrow-circle-gradient.svg`}
              className="arrow-circle w-9 h-9 md:w-14 md:h-14 lg:mb-2 mr-2 md:mr-3"
              width={10}
              height={10}
              alt="arrow-circle"
            />
            <h1>Some works I’ve build</h1>
          </div>

          <ul className="projects w-full mt-5">
            {projects?.map((project, index) => {
              return (
                <li
                  key={`project-${project?.id}`}
                  className="reveal project w-[100%]"
                >
                  <div className="project-image"></div>
                  <style jsx>
                    {`
                      .project-image {
                        background-image: url(https://admin.mariannepiquet.fr${project
                          ?.attributes?.image?.data?.attributes?.url});
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        width: 100%;
                      }
                    `}
                  </style>

                  <div className="project-content">
                    <div>
                      <span>{project?.attributes.type}</span>
                      <h2>{project?.attributes.name}</h2>
                      <p>{project?.attributes.description}</p>
                      <div>
                        <ul className="tools flex flex-wrap">
                          {project?.attributes.tools.data?.map(
                            (tool, index) => (
                              <li
                                key={`project-name_${index}`}
                                className="pr-3"
                              >
                                {tool?.attributes.name}
                              </li>
                            )
                          )}
                        </ul>
                        <div className="project-links flex justify-end">
                          {project?.attributes.versionnings?.data.length !=
                          0 ? (
                            <a
                              href={
                                project?.attributes.versionnings?.data[0]
                                  ?.attributes.url
                              }
                              referrerPolicy="no-referrer-when-downgrade"
                            >
                              <Image
                                src={`https://admin.mariannepiquet.fr${project?.attributes.versionnings?.data[0]?.attributes.icon?.data?.attributes.url}`}
                                className="project-image lg:mb-2 mr-2"
                                width={20}
                                height={20}
                                alt="Hosting service access"
                              />
                            </a>
                          ) : null}
                          {project?.attributes.external_link != null ? (
                            <a
                              href={project?.attributes.external_link}
                              referrerPolicy="no-referrer-when-downgrade"
                            >
                              <Image
                                src={`/images/external-link.svg`}
                                className="project-image lg:mb-2"
                                width={20}
                                height={20}
                                alt="URL access of the web application or website"
                              />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <button type="button" className="btn see-more-project" onClick={handleProjects}>
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
