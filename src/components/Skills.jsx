import React from "react";
import { Box, Heading, Img, SimpleGrid, useColorMode } from "@chakra-ui/react";

import html from "./Images/TechSkills/html.png"
import css from "./Images/TechSkills/css.png";
import boostrap from "./Images/TechSkills/boostrap.png";
import js from "./Images/TechSkills/js.jpg";
import react from "./Images/TechSkills/react.svg";
import redux from "./Images/TechSkills/redux.png";
import chakra from "./Images/TechSkills/chakraui.png";
import postman from "./Images/TechSkills/postman.png";
import expressjs from "./Images/TechSkills/expressjs.webp";
import mongodb from "./Images/TechSkills/mongodb.png";
import git from "./Images/TechSkills/git.png";
import dsa from "./Images/TechSkills/dsa.png";
import nodejs from "./Images/TechSkills/nodejs.png";
import nextjs from "./Images/TechSkills/nextjs.png";
import vscode from "./Images/TechSkills/vscode.png"

import netlify from "./Images/TechSkills/netlify.svg";
import vercel from "./Images/TechSkills/vercel.svg"
import { useState } from "react";
import Github from "./Github";
import Stats from "./Stats";
import { BiZoomIn } from "react-icons/bi";
import Skillgrid from "./skillgrid";

export const Skills = () => {
;
  let skills_data = [
    {
      url: html,
      name: "HTML",
      category1: "frontend",
    },

    {
      url: css,
      name: "CSS",
      category1: "frontend",
    },

    {
      url: boostrap,
      name: "Boostrap",
      category1: "frontend",
    },

    {
      url: js,
      name: "JavaScript",
      category1: "frontend",
    },

    {
      url: react,
      name: "React",
      category1: "frontend",
    },

    {
      url: redux,
      name: "Redux",
      category1: "frontend",
    },

    {
      url: chakra,
      name: "Chakra UI",
      category1: "frontend",
    },

    {
      url: nodejs,
      name: "Node JS",
      category2: "backend",
    },

    {
      url: expressjs,
      name: "Express",
      category2: "backend",
    },
    {
        url: nextjs,
        name: "Next",
        category2: "backend",
      },

    {
      url: mongodb,
      name: "MongoDB",
      category2: "backend",
    },


    {
      url: dsa,
      name: "DSA",
      category1: "frontend",
      category2: "backend",
    },
  ];

  let tools_data = [
    {
      url: vscode,
      name: "Vscode",
      category1: "frontend",
      category2: "backend",
    },
    {
      url: git,
      name: "Git",
      category1: "frontend",
      category2: "backend",
    },
    {
      url: netlify,
      name: "Netlify",
      category1: "frontend",
      category2: "backend",
    },
    {
      url: vercel,
      name: "Vercel",
      category1: "frontend",
      category2: "backend",
    },
     {
      url: postman,
      name: "Postman",
      category1: "frontend",
      category2: "backend",
    },
  ]



  return (
    <Box className="skills">
       <Box >
        <Heading padding="55px 0px 30px 0px">
          Tech <span style={{color:"#e4002b"}} >Stack</span>
        </Heading>
      </Box>

       <Skillgrid skills={skills_data}/>
       <Box >
        <Heading padding="50px 0px 30px 0px">
          To<span style={{color:"#e4002b"}} >ols</span>
        </Heading>
      </Box>

       <Skillgrid skills={tools_data}/>

       <Github />
      <Stats />

    </Box>
  );
};
