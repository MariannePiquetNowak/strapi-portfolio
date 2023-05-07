import React, { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
  const [socials, setSocial] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}socials?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    setSocial(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <footer className="Footer w-full h-36 p-2">
      <div className="social-icons flex flex-col justify-end items-center h-full">
        <ul className="flex justify-between items-center w-56 my-3">
          {socials &&
            socials?.map((social, index) => (
              <li
                key={social.id}
                className="hover:md:translate-y-[-2px] transition-all "
              >
                <a
                  href={social.attributes.url}
                  className="social-icon"
                  target="_blank"
                >
                  <Image
                    width={25}
                    height={25}
                    src={`https://admin.mariannepiquet.fr${social.attributes.icon.data.attributes.url}`}
                    alt="social icon"
                  />
                </a>
              </li>
            ))}
        </ul>
        <p className="text-[#02BEB3]">Design & Built by Marianne Piquet-Nowak with Figma, Strapi & NextJS</p>
        <p className="text-[#CBCBCB]">Inspirations - Brittany Chiang & Jacek Jeznah Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
