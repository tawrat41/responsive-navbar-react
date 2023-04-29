import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import { Services } from "./components/Services/Services.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
