import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <header className="bg-black">
      <nav className="p-4">
        <a href="/" className="text-xl font-bold text-white">
          Design <span className="text-blue-500">VK</span>
        </a>
        <ul className=" md:flex gap-12 text-lg hidden">
          {navItems.map((item, index) => (
            <li key={index} className="text-white">
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
