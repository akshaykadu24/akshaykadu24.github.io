import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Skills.css"

import html from "../Images/TechSkills/html.png"
import css from "../Images/TechSkills/css.png";
import boostrap from "../Images/TechSkills/boostrap.png";
import js from "../Images/TechSkills/js.jpg";
import react from "../Images/TechSkills/react.svg";
import redux from "../Images/TechSkills/redux.png";
import chakra from "../Images/TechSkills/chakraui.png";
// import postman from "../Images/TechSkills/postman.png";
// import expressjs from "../Images/TechSkills/expressjs.webp";
// import mongodb from "../Images/TechSkills/mongodb.png";
import git from "../Images/TechSkills/git.png";
import dsa from "../Images/TechSkills/dsa.png";
import nodejs from "../Images/TechSkills/nodejs.png";
import nextjs from "../Images/TechSkills/nextjs.png";

import netlify from "../Images/TechSkills/netlify.svg";
import { useState } from "react";
import { SoftSkills } from "./SoftSkills";
import Github from "../Calendar/Github";
import Stars from "../Calendar/Stars";

export const Skills = () => {
  const [btn, setBtn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
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

    // {
    //   url: expressjs,
    //   name: "Express",
    //   category2: "backend",
    // },
    {
        url: nextjs,
        name: "Next",
        category2: "backend",
      },

    // {
    //   url: mongodb,
    //   name: "MongoDB",
    //   category2: "backend",
    // },

    // {
    //   url: postman,
    //   name: "Postman",
    //   category1: "frontend",
    //   category2: "backend",
    // },

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
      url: dsa,
      name: "DSA",
      category1: "frontend",
      category2: "backend",
    },
  ];

  const [skills, setSkills] = useState(skills_data);

  const handleAll = () => {
    setSkills(skills_data);
    setBtn(true);
  };

  const handleFrontend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category1 == "frontend";
    });

    setSkills(data);
    setBtn(false);
  };

  const handleBackend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category2 == "backend";
    });

    setSkills(data);
    setBtn(false);
  };

  // console.log(skills);

  return (
    <div className="skills_container" id="skills">
      <div className="skills_heading">
        <h2 >
          Tech <span>Stack</span>
        </h2>
      </div>

      <div  className="skills_btn">
        <button onClick={handleAll}>All</button>
        <button onClick={handleFrontend}>Frontend</button>
        <button onClick={handleBackend}>Backend</button>
      </div>

      <div className="skills_grid" >
        <SimpleGrid columns={[2, 3, 4, 6]} spacing="30px">
          {skills?.map((elem) => (
            <Box key={elem.name}>
              <div
                className={
                  colorMode == "light"
                    ? "skills_grid_box"
                    : "skills_grid_box_dark"
                }
                
              >
                <div className="skills_grid_box_img">
                  <img src={elem.url} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>
      <SoftSkills/>
      <Github />
      <Stars />
    </div>
  );
};
