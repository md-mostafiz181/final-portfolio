import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutMe from "../pages/Home/AboutMe/AboutMe";
import Skill from "../pages/Home/Skill/Skill";
import Project from "../pages/Home/Project/Project";
import Contact from "../pages/Home/Contact/Contact";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:"/",
           element:<Home></Home>
        },
        {
          path:"/about",
          element:<AboutMe></AboutMe>
        },
        {
          path:"/skills",
          element:<Skill></Skill>
        },
        {
          path:"/project",
          element:<Project></Project>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);