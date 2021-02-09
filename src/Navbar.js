import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ toggle }) {
  return (
    <nav
      className="flex justify-end items-center h-14 bg-indigo-500 text-white relative shadow-lg font-mono"
      role="navigation"
    >
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <NavLink to="/" exact className="p-4 hover:text-gray-400">
          Home
        </NavLink>
        <NavLink to="/resume" className="p-4 hover:text-gray-400">
          Resume
        </NavLink>
        <NavLink to="/projectsM" exact className="p-4 hover:text-gray-400">
          Projects
        </NavLink>
        <NavLink to="/courses" className="p-4 hover:text-gray-400">
          Courses
        </NavLink>
        <NavLink to="/about" className="p-4 hover:text-gray-400">
          About Me
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
