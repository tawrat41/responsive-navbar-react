// basically, i didn't do anything with app.jsx.
// i mainly rendered the react router in main.jsx
// created seperate seperate component Navbar.jsx for navbar toggling, hamburger/cross icon, and Header.jsx component for the nav items
// created separate About, Services, Portfolio, Contact component just for display purpose. 


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import { Services } from "./components/Services/Services.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";



// for render a browser router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,

    // putting the others as children so that the navbar doesn't disappear routing to other link
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ]
  },
  
]);

// setting the the above routers to root DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
