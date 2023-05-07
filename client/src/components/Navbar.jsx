import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useWindowSize from "../hooks";

const Navbar = () => {
  const router = useRouter();
  const size = useWindowSize();

  const [socials, setSocial] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PORTFOLIO_URL}socials?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    const result = await res.json();
    setSocial(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function openMenu() {
    const menu = document.querySelector("#navbar-default");
    if (menu.classList.contains("close")) {
      menu.classList.remove("close");
      menu.classList.add("open");
    } else {
      menu.classList.add("close");
      menu.classList.remove("open");
    }
  }

  function resizeMenu() {
    if(size.width >= 768) {
      const menu = document.querySelector("#navbar-default");
  
      const navbar = document.querySelector("#navbar");
      navbar.appendChild(menu);
    } else {
      const menu = document.querySelector("#navbar-default");
      // Ajouter menu après l'élément #navbar
      const navbar = document.querySelector("#navbar");
      navbar.after(menu);
  
    }
  }

  useEffect(() => { resizeMenu() }, [size.width]);

  return (
    <nav className="bg-[#0f1420] text-white border-gray-200 md:w-32 md:h-screen fixed w-full">
      <div  id="navbar" className="md:max-w-screen-xl flex flex-wrap md:flex-nowrap md:flex-col items-center justify-between mx-auto md:h-screen">
        <div className="flex flex-row md:flex-col md:item-center md:justify-center p-4">
          <a href="/" className="flex items-center justify-center md:mb-3">
            <Image
              src="/images/logo.png"
              className="logo"
              width={40}
              height={40}
              alt="Marianne Piquet-Nowak Logo"
            />
          </a>
          <h5 className="hidden md:block self-center text-lg font-semibold whitespace-nowrap text-white">
            Marianne
          </h5>
          <h6 className="hidden md:block text-[11px]">Web Developer</h6>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={openMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        
      </div>
      <div
          className="close justify-between md:h-3/4 w-full md:block mdh-auto flex md:flex flex-col items-center md:justify-between md:w-full"
          id="navbar-default"
        >
          <ul className="md:border-t-[1px] md:border-b-[1px] border-gray-700 md:w-full font-normal flex flex-col w-4/5 p-4 md:p-0 mt-4 md:mt-0 md:text-center md:divide-y md:divide-y-1 divide-gray-700">
            <li>
              <Link
                href="/about"
                className={
                  router.pathname === "/about" || router.pathname === "/"
                    ? "flex md:justify-center py-2 px-3 md:py-4 block md:p-0 text-white md:text-[#02BEB3] bg-gray-800 md:bg-gray-800"
                    : "flex md:justify-center py-2 px-3 md:py-4 block hover:bg-gray-100 md:border-0 md:p-0 text-white md:hover:text-[#02BEB3] hover:bg-gray-800 md:hover:bg-gray-800 hover:text-white transition-all"
                }
                aria-current="page"
              >
                {size.width <= 768 ? (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M12.2 13L11.3 13.9C11.1167 14.0833 11.025 14.3167 11.025 14.6C11.025 14.8833 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.7 8.7C12.5167 8.51667 12.2833 8.425 12 8.425C11.7167 8.425 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H9C8.71667 11 8.479 11.096 8.287 11.288C8.095 11.48 7.99933 11.7173 8 12C8 12.2833 8.096 12.521 8.288 12.713C8.48 12.905 8.71733 13.0007 9 13H12.2ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                        fill="#02BEB3"
                      />
                    </svg>{" "}
                    About
                  </>
                ) : (
                  <>About</>
                )}
              </Link>
            </li>

            <li>
              <Link
                href="/skills"
                className={
                  router.pathname === "/skills"
                    ? "flex md:justify-center py-2 px-3 md:py-4 block md:p-0 text-white md:text-[#02BEB3] bg-gray-800 md:bg-gray-800"
                    : "flex md:justify-center py-2 px-3 md:py-4 block hover:bg-gray-100 md:border-0 md:p-0 text-white md:hover:text-[#02BEB3] hover:bg-gray-800 md:hover:bg-gray-800 hover:text-white transition-all"
                }
              >
                {size.width <= 768 ? (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M12.2 13L11.3 13.9C11.1167 14.0833 11.025 14.3167 11.025 14.6C11.025 14.8833 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.7 8.7C12.5167 8.51667 12.2833 8.425 12 8.425C11.7167 8.425 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H9C8.71667 11 8.479 11.096 8.287 11.288C8.095 11.48 7.99933 11.7173 8 12C8 12.2833 8.096 12.521 8.288 12.713C8.48 12.905 8.71733 13.0007 9 13H12.2ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                        fill="#02BEB3"
                      />
                    </svg>{" "}
                    My Skills
                  </>
                ) : (
                  <>My Skills</>
                )}
              </Link>
            </li>

            <li>
              <Link
                href="/experience"
                className={
                  router.pathname === "/experience"
                    ? "flex md:justify-center py-2 px-3 md:py-4 block md:p-0 text-white md:text-[#02BEB3] bg-gray-800 md:bg-gray-800"
                    : "flex md:justify-center py-2 px-3 md:py-4 block hover:bg-gray-100 md:border-0 md:p-0 text-white md:hover:text-[#02BEB3] hover:bg-gray-800 md:hover:bg-gray-800 hover:text-white transition-all"
                }
              >
                {size.width <= 768 ? (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M12.2 13L11.3 13.9C11.1167 14.0833 11.025 14.3167 11.025 14.6C11.025 14.8833 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.7 8.7C12.5167 8.51667 12.2833 8.425 12 8.425C11.7167 8.425 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H9C8.71667 11 8.479 11.096 8.287 11.288C8.095 11.48 7.99933 11.7173 8 12C8 12.2833 8.096 12.521 8.288 12.713C8.48 12.905 8.71733 13.0007 9 13H12.2ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                        fill="#02BEB3"
                      />
                    </svg>{" "}
                    Experiences
                  </>
                ) : (
                  <>Experiences</>
                )}
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className={
                  router.pathname === "/projects"
                    ? "flex md:justify-center py-2 px-3 md:py-4 block md:p-0 text-white md:text-[#02BEB3] bg-gray-800 md:bg-gray-800"
                    : "flex md:justify-center py-2 px-3 md:py-4 block hover:bg-gray-100 md:border-0 md:p-0 text-white md:hover:text-[#02BEB3] hover:bg-gray-800 md:hover:bg-gray-800 hover:text-white transition-all"
                }
              >
                {size.width <= 768 ? (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M12.2 13L11.3 13.9C11.1167 14.0833 11.025 14.3167 11.025 14.6C11.025 14.8833 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.7 8.7C12.5167 8.51667 12.2833 8.425 12 8.425C11.7167 8.425 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H9C8.71667 11 8.479 11.096 8.287 11.288C8.095 11.48 7.99933 11.7173 8 12C8 12.2833 8.096 12.521 8.288 12.713C8.48 12.905 8.71733 13.0007 9 13H12.2ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                        fill="#02BEB3"
                      />
                    </svg>{" "}
                    My Works
                  </>
                ) : (
                  <>My Works</>
                )}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={
                  router.pathname === "/contact"
                    ? "flex md:justify-center py-2 px-3 md:py-4 block md:p-0 text-white md:text-[#02BEB3] bg-gray-800 md:bg-gray-800"
                    : "flex md:justify-center py-2 px-3 md:py-4 block hover:bg-gray-100 md:border-0 md:p-0 text-white md:hover:text-[#02BEB3] hover:bg-gray-800 md:hover:bg-gray-800 hover:text-white transition-all"
                }
              >
                {size.width <= 768 ? (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M12.2 13L11.3 13.9C11.1167 14.0833 11.025 14.3167 11.025 14.6C11.025 14.8833 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.7 8.7C12.5167 8.51667 12.2833 8.425 12 8.425C11.7167 8.425 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H9C8.71667 11 8.479 11.096 8.287 11.288C8.095 11.48 7.99933 11.7173 8 12C8 12.2833 8.096 12.521 8.288 12.713C8.48 12.905 8.71733 13.0007 9 13H12.2ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                        fill="#02BEB3"
                      />
                    </svg>{" "}
                    Contact
                  </>
                ) : (
                  <>Contact</>
                )}
              </Link>
            </li>

            <li className="py-4 text-center font-bold">
              <a
                href="/lien_vers_cv"
                className="md:w-full py-2 px-8 mb-5 md:px-0 border rounded md:border-none border-[#02BEB3] hover:border-[#02BEB3]  md:rounded-none text-center text-[#02BEB3] hover:md:text-[#02BEB3] hover:text-gray-900 hover:bg-[#02BEB3] transition-all hover:md:bg-gray-900"
                id="resume-btn"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="flex justify-center w-full md:block md:w-full mdh-auto">
            <ul className="font-medium flex flex-row justify-between md:flex-col md:items-center p-4 md:p-0 mt-4 md:space-y-4 md:mt-0 w-60 md:w-auto">
              {socials &&
                socials?.map((social, index) => (
                  <li
                    key={social.id}
                    className="hover:md:translate-x-0.5 transition-all"
                  >
                    <a
                      href={social.attributes.url}
                      className="social-icon"
                      target="_blank"
                    >
                      <Image
                        width={20}
                        height={20}
                        src={`https://admin.mariannepiquet.fr${social?.attributes.icon.data.attributes.url}`}
                        alt="social icon"
                      />
                    </a>
                  </li>
                ))}
              {size.width >= 768 ? (
                <div className="md:w-[1px] md:h-[3em] md:bg-[#02BEB3]"></div>
              ) : null}
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
