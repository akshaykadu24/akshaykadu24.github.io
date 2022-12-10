import { Box, Show, useColorMode } from "@chakra-ui/react";
import React from "react";
import "./Stars.css";



const Stars = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      className="stars_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <Box className="main_box">
        <Show >
          <Box className="star_header">
            <h2>
              Github <span>Statistics</span>
            </h2>
          </Box>
          <Box className="box1">
            <a href="https://github.com/akshaykadu24">
              <img src="https://github-readme-streak-stats.herokuapp.com?user=akshaykadu24&theme=github-light&border_radius=5" />
            </a>
          </Box>
          <Box className="box2">
            <a href="https://github.com/akshaykadu24">
              <img
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=akshaykadu24&count_private=true&show_icons=true&theme=github-light&border_radius=5"
              />
            </a>
          </Box>
        </Show >

        
      </Box>
    </Box>
  );
};

export default Stars