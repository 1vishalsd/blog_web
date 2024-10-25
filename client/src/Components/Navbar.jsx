import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import {
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/blogs",
      label: "Blog",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/services",
      label: "Service",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header className="bg-black text-white fixed top-0 right-0 left-0">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-blue-500">VK</span>
        </a>
        <ul className=" md:flex gap-12 text-lg hidden">
          {navItems.map((item, index) => (
            <li key={index} className="text-white">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className=" text-white lg:flex gap-4 items-center hidden">
          <a href="/" className=" hover:text-blue-500">
            <FaSquareTwitter />
          </a>
          <a href="/" className=" hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="/" className=" hover:text-blue-500">
            <FaInstagram />
          </a>
          <button className=" text-white bg-blue-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-blue-500  transition-all  duration-300">
            Log in
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className=" cursor-pointer ">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <div>
        <ul
          className={`md:hidden block space-y-4 gap-12 text-lg px-4 py-6 bg-white mt-14 ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : " hidden"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="text-black">
              <NavLink onClick={toggleMenu} to={item.path}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
