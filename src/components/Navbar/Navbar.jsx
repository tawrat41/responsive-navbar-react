// in this file, the main task is done to create hamburger and cross button. Icons are taken from Heroicons.
// also the toggling, navbar is done here

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav >
      {/* toggling open/close of navabr */}
      <div onClick={() => setOpen(!open)} className="md:hidden bg-purple-300 h-10">   
      {/* navabr hidden */}
        <span>
          {open === true ? (
            // cross icon
            <XMarkIcon className="h-6 w-6 ml-3 text-purple-900" />
          ) : (
            // hamburger icon
            <Bars3Icon className="h-6 w-6 ml-3 text-purple-900" />
          )}
        </span>
      </div>

      <ul

      // basically what I have done is simply sent the vertical navbar out of the webpage when cross button or other link is clicked
        className={`absolute md:static duration-500 mx-auto pl-8 pb-4 py-3 bg-purple-300 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        <Header></Header>
        
      </ul>
      
      {/* to render their children route elements */}
      <Outlet></Outlet>
    </nav>
  );
};

export default Navbar;
