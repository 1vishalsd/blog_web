import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", Link: "Home" }
    { path: "/about", Link: "About" }
    { path: "/services", Link: "Service" }
    { path: "/contact", Link: "Contact" }
    { path: "/blogs", Link: "Blog" }

  ];
  return <div>Navbar</div>;
};

export default Navbar;
