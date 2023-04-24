import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    function openMenu() {
        const menu = document.querySelector("#navbar-default");
        menu.classList.toggle("hidden");
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 md:w-32 md:h-screen">
            <div className="md:max-w-screen-xl flex flex-wrap md:flex-nowrap md:flex-col items-center justify-between mx-auto md:h-screen">
                <div className="flex flex-row md:flex-col md:item-center md:justify-center p-4">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center justify-center md:mb-3"
                    >
                        <Image
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="logo"
                            width={40}
                            height={40}
                            alt="Marianne Piquet-Nowak Logo"
                        />
                    </a>
                    <span className="hidden md:block self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                        Marianne
                    </span>
                    <p className="hidden md:block text-xs">Web Developer</p>
                </div>

                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block mdh-auto flex flex-col items-center md:w-full"
                    id="navbar-default"
                >
                    <ul className="md:w-full font-normal flex flex-col w-4/5 p-4 md:p-0 mt-4 md:mt-0 md:text-center md:divide-y divide-gray-200 md:divide-y-1 dark:divide-gray-700">
                        <li>
                            <Link
                                href="/about"
                                className={
                                    router.pathname === "/about" ||
                                    router.pathname === "/"
                                        ? "md:py-4 block pl-3 pr-4 text-white bg-emerald-500 dark:text-gray-900 md:bg-transparent md:p-0 dark:text-white md:dark:text-emerald-400 md:dark:bg-gray-800"
                                        : "md:py-4 block pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-emerald-400 dark:hover:bg-gray-700 md:dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
                                }
                                aria-current="page"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/skills"
                                className={
                                    router.pathname === "/skills"
                                    ? "md:py-4 block pl-3 pr-4 text-white bg-emerald-500 dark:text-gray-900 md:bg-transparent md:p-0 dark:text-white md:dark:text-emerald-400 md:dark:bg-gray-800 "
                                    : "md:py-4 block pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-emerald-400 dark:hover:bg-gray-700 md:dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
                                }
                            >
                                My Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/experience"
                                className={
                                    router.pathname === "/experience"
                                    ? "md:py-4 block pl-3 pr-4 text-white bg-emerald-500 dark:text-gray-900 md:bg-transparent md:p-0 dark:text-white md:dark:text-emerald-400 md:dark:bg-gray-800"
                                    : "md:py-4 block pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-emerald-400 dark:hover:bg-gray-700 md:dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
                                }
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={
                                    router.pathname === "/projects"
                                    ? "md:py-4 block pl-3 pr-4 text-white bg-emerald-500 dark:text-gray-900 md:bg-transparent md:p-0 dark:text-white md:dark:text-emerald-400 md:dark:bg-gray-800"
                                    : "md:py-4 block pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-emerald-400 dark:hover:bg-gray-700 md:dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
                                }
                            >
                                My Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={
                                    router.pathname === "/contact"
                                    ? "md:py-4 block pl-3 pr-4 text-white bg-emerald-500 dark:text-gray-900 md:bg-transparent md:p-0 dark:text-white md:dark:text-emerald-400 md:dark:bg-gray-800"
                                    : "md:py-4 block pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-emerald-400 dark:hover:bg-gray-700 md:dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
                                }
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="py-4 text-center font-bold">
                            <a
                                href="/lien_vers_cv"
                                className="md:w-full py-2 px-8 mb-5 md:px-0 border rounded md:border-none border-emerald-400 hover:border-emerald-400  md:rounded-none text-center text-emerald-400 hover:md:text-emerald-400 hover:dark:text-gray-900 hover:bg-emerald-400 transition-all hover:dark:md:bg-gray-900"
                                id="resume-btn"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden w-full md:block md:w-auto mdh-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:space-y-8 md:mt-0">
                        <li>
                            <a href="/about" className="social-icon">
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="/skills" className="social-icon">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="/experience" className="social-icon">
                                Azure
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="social-icon">
                                DeviantArt
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="social-icon">
                                instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
