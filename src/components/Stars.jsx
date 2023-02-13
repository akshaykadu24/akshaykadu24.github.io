import { Box, Heading, Img, Show, useColorMode } from "@chakra-ui/react";
import React from "react";



const Stars = () => {
  return (
    <Box className="stars" >
      
          <Box >
            <Heading marginTop="30px">
              Github <span style={{color:"#e4002b"}}>Statistics</span>
            </Heading>
          </Box>
          <Box width={["60%","50%","45%","35%"]} margin="auto" marginTop="30px"  >
            <a href="https://github.com/akshaykadu24">
              <Img src="https://github-readme-streak-stats.herokuapp.com?user=akshaykadu24&theme=github-light&border_radius=5" />
            </a>
          </Box>
          <Box width={["60%","50%","45%","35%"]}  margin="auto" marginTop="30px" marginBottom="20px">
            <a href="https://github.com/akshaykadu24">
              <Img
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=akshaykadu24&count_private=true&show_icons=true&theme=github-light&border_radius=5"
              />
            </a>
          </Box>
    </Box>
  );
};

export default Stars