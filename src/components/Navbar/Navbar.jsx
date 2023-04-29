import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav >
      <div onClick={() => setOpen(!open)} className="md:hidden bg-purple-300 h-10">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 ml-3 text-purple-900" />
          ) : (
            <Bars3Icon className="h-6 w-6 ml-3 text-purple-900" />
          )}
        </span>
      </div>

      <ul
        className={`absolute md:static duration-500 mx-auto pl-8 pb-4 py-3 bg-purple-300 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        <Header></Header>
        
      </ul>
      
      <Outlet></Outlet>
    </nav>
  );
};

export default Navbar;
