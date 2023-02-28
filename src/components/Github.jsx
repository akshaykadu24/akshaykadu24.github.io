import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';



function Github() {
  const { colorMode, toggleColorMode } = useColorMode();
  let calColor
  if(colorMode=="light"){
    calColor = "#d5e6f9"
  }else{
    calColor = "#1a202c"
  }
  return (
    <Box className="github" paddingBottom="70px" style={{
      backgroundColor: colorMode == "light" ? "#D5E6F9" : "#1a202c",
      color: colorMode=="light"? "dark":"dark"
    }} >
      <Box >
        <Heading margin="50px 0px 50px 0px" paddingTop="40px">
          Github <span style={{color:"#e4002b"}}>Calendar</span>
        </Heading>
      </Box>
      <Box width={["90%","80%","80%","80%"]} margin="auto" border={"0px solid red"} backgroundColor={calColor}  >
        <GitHubCalendar style={{  margin:"auto"}}  username="akshaykadu24" />
      </Box>
      
    </Box>
  );
}

export default Github;
