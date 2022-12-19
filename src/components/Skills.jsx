import React from "react";
import { Box, Heading, Img, SimpleGrid, useColorMode } from "@chakra-ui/react";

import html from "./Images/TechSkills/html.png"
import css from "./Images/TechSkills/css.png";
import boostrap from "./Images/TechSkills/boostrap.png";
import js from "./Images/TechSkills/js.jpg";
import react from "./Images/TechSkills/react.svg";
import redux from "./Images/TechSkills/redux.png";
import chakra from "./Images/TechSkills/chakraui.png";
// import postman from "./Images/TechSkills/postman.png";
// import expressjs from "./Images/TechSkills/expressjs.webp";
// import mongodb from "./Images/TechSkills/mongodb.png";
import git from "./Images/TechSkills/git.png";
import dsa from "./Images/TechSkills/dsa.png";
import nodejs from "./Images/TechSkills/nodejs.png";
import nextjs from "./Images/TechSkills/nextjs.png";

import netlify from "./Images/TechSkills/netlify.svg";
import { useState } from "react";
import Github from "./Github";
import Stars from "./Stars";
import { BiZoomIn } from "react-icons/bi";

export const Skills = () => {
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

  // console.log(skills);

  return (
    <Box >
      <Box >
        <Heading margin="30px 0px 30px 0px">
          Tech <span style={{color:"#e4002b"}} >Stack</span>
        </Heading>
      </Box>

      

      <Box width="80%"  margin="auto" marginBottom="40px" >
        <SimpleGrid columns={[2, 3, 4, 6]} spacing="30px" >
          {skills?.map((elem) => (
            <Box key={elem.name} _hover={{"box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px","borderRadius":"10%"}} >
              <Box
              backgroundColor={colorMode == "dark"
              ? "#0f1624"
              : "#edf2f7"}
              borderRadius="12%"
                paddingTop="15px"
                paddingBottom="10px"
              >
                <Box width="65%"  margin="auto" >
                  <Img height="90px" src={elem.url} alt="skills_logo" />
                </Box>

                <Box marginTop="5px">
                  <h3>{elem.name}</h3>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Github />
      <Stars />
    </Box>
  );
};
