import React, { useState } from "react";
import Image from "next/image";

const About = ({ about, aboutDesc }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <section
      id="About"
      className="p-6 my-16 md:m-10 md:p-8 xl:mx-0 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[800px]"
    >
      <div className="xl:px-[2em] flex flex-col items-center justify-between lg:flex-row-reverse lg:w-full lg:h-auto">
        <div className="image-section flex justify-center w-80 h-auto lg:w-3/6 xl:w-2/5 2xl:w-1/3 lg:h-auto lg:translate-y-[-8em] lg:translate-x-[-3em]">
          <Image
            src={`https://admin.mariannepiquet.fr${about?.attributes.image.data.attributes.url}`}
            blurDataURL={`https://admin.mariannepiquet.fr$${about?.attributes.image.data.attributes.url}`}
            width={250}
            height={100}
            alt="Marianne Piquet-Nowak Avatar"
            className={`image-section__about w-full h-auto duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
              }
            `}
            onLoadingComplete={() => setLoading(false)}
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
  );
};

export default About;
