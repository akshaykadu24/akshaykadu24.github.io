import { Box, Heading, Image, Show, useColorMode } from "@chakra-ui/react";
import React from "react";



const Stars = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  let link1
  let link2
  let link3
  if(colorMode=="light"){
    link1 = "https://github-readme-stats.vercel.app/api?username=akshaykadu24&show_icons=true&locale=en&theme=vue&bg_color=d5e6f9&count_private=true&text_color=000000&border_radius=5"
    link2 = "https://github-readme-streak-stats.herokuapp.com?user=akshaykadu24&theme=vue&background=D5E6F9"
    // &mode=weekly&currStreakNum=000000&sideNums=000000
    link3 = "https://github-readme-stats.vercel.app/api/top-langs/?username=akshaykadu24&theme=vue&show_icons=true&hide_border=false&layout=compact&bg_color=d5e6f9&text_color=000000"
  }else{
    link1 = "https://github-readme-stats.vercel.app/api?username=akshaykadu24&count_private=true&show_icons=true&theme=vue-dark&border_radius=5&bg_color=0f1624&hide_border=true"
    link2 = "https://github-readme-streak-stats.herokuapp.com?user=akshaykadu24&theme=vue-dark&border_radius=5&background=0f1624"
    link3 = "https://github-readme-stats.vercel.app/api/top-langs/?username=akshaykadu24&theme=vue-dark&show_icons=true&hide_border=true&layout=compact&bg_color=0f1624"
  }
  return (
    <Box className="stars" paddingBottom={"30px"} >
      
          <Box >
            <Heading marginTop="30px" >
              Github <span style={{color:"#e4002b"}}>Statistics</span>
            </Heading>
          </Box>
          <Box >
    
            <Box   marginTop="30px"  >
              <a href="https://github.com/akshaykadu24">
                <Image width={["60%","50%","45%","35%"]} margin="auto" src={link1}/>
              </a>
            </Box>
            
          <Box  margin="auto" marginTop="30px"  >
            <a href="https://github.com/akshaykadu24">
              <Image width={["60%","50%","45%","35%"]} margin="auto" src={link2} />
            </a>
          </Box>
            <Box  margin="auto" marginTop="30px"  >
              <a href="https://github.com/akshaykadu24">
                <Image width={["60%","50%","45%","35%"]} margin="auto" src={link3} />
              </a>
            </Box>
            </Box>
         
    </Box>
  );
};

export default Stars