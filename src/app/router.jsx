import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landingPage";
import Projects from "../pages/projects/projects";
import Skills from "../pages/skills/skills";
import Hobbies from "../pages/hobbies/hobbies";
import Contact from "../pages/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;