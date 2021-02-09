import React from "react";
import { NavLink } from "react-router-dom";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center text-white bg-gray-700"
          : "hidden"
      }
      onClick={toggle}
    >
      <NavLink
        to="/"
        exact
        className="p-4 hover:text-gray-300 hover:bg-indigo-500"
      >
        Home
      </NavLink>
      <NavLink
        to="/resume"
        className="p-4 hover:text-gray-300 hover:bg-indigo-500"
      >
        Resume
      </NavLink>
      <NavLink
        to="/projects"
        className="p-4 hover:text-gray-300 hover:bg-indigo-500"
      >
        Projects
      </NavLink>
      <NavLink
        to="/courses"
        className="p-4 hover:text-gray-300 hover:bg-indigo-500"
      >
        Courses
      </NavLink>
      <NavLink
        to="/about"
        className="p-4 hover:text-gray-300 hover:bg-indigo-500"
      >
        About Me
      </NavLink>
    </div>
  );
}

export default Dropdown;
