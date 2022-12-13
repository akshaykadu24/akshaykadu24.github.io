import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";


function Github() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box paddingBottom="70px" style={{
      backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      color: colorMode=="light"? "dark":"dark"
    }} >
      <Box >
        <Heading margin="50px 0px 50px 0px" paddingTop="40px">
          Github <span style={{color:"#e4002b"}}>Calendar</span>
        </Heading>
      </Box>
      <Box width="80%" margin="auto" backgroundColor="white" padding="12px 0px 12px 15px">
        <GitHubCalendar username="akshaykadu24" />
      </Box>
      
    </Box>
  );
}

export default Github;
