import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex flex-row justify-center my-auto">
      <li><a className="mr-2 font-bold text-purple-950 hover:underline px-2" href="/">Home</a></li>
      <li><a className="mr-2 font-bold text-purple-950 hover:underline px-2" href="/about">About</a></li>
      <li><a className="mr-2 font-bold text-purple-950 hover:underline px-2" href="/services">Services</a></li>
      <li><a className="mr-2 font-bold text-purple-950 hover:underline px-2" href="/portfolio">Portfolio</a></li>
      <li><a className="mr-2 font-bold text-purple-950 hover:underline px-2" href="/contact">Contact</a></li>
    </nav>
  );
};

export default Header;