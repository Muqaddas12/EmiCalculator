import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white border-gray-200 dark:bg-blue-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Loan Calculator
        </span>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-300`}
          id="navbar-default"
        >
       <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-100  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-blue-600">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "bg-white text-blue-600"


                      : "text-white hover:bg-blue-500 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-500 hover:text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/erlive"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-500 hover:text-white"
                  }`
                }
              >
                Exchange Rate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                      : "text-white hover:bg-blue-500 hover:text-white"
                  }`
                }
              >
                Error Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
