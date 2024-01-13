// Layout.js
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Tailwind CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-QC8/+1RS5cXrwHLDm/0aHjI7ZU1hcfKRtjSg6V6xhIf3i8+9MjIc5SXE3h28XipOd9pAENR/1f/fzCg9Li7NXQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yoshida Portfolio</span>
            </a>
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className={`w-full md:flex md:w-auto ${isNavOpen ? "block" : "hidden"}`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/">
                    <p className={`block py-2 px-3 rounded ${router.pathname === "/" ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"}`} aria-current="page">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <p className={`block py-2 px-3 rounded ${router.pathname === "/profile" ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"}`}>Profile</p>
                  </Link>
                </li>
                <li>
                  <Link href="/works">
                    <p className={`block py-2 px-3 rounded ${router.pathname === "/works" ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"}`}>Works</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p className={`block py-2 px-3 rounded ${router.pathname === "/contact" ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"}`}>Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
