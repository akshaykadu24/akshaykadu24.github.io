import React, { useEffect } from "react";
import { Box, Heading, HStack, Img, SimpleGrid, useColorMode } from "@chakra-ui/react";
import indeed from "./Images/project/indeed.png";
import shop from "./Images/project/ssense.png";
import food from "./Images/project/kindmeal.png"
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(()=>{
   
  },[colorMode])
  return (
    <Box
    paddingBottom="50px"
      style={{ backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",}}>
      <Box  >
        <Box paddingTop="50px"
      paddingBottom="50px">
          <Heading >
            <span style={{color:"#e4002b"}}>My</span> Creative <span style={{color:"#e4002b"}}>Projects </span>Section
          </Heading>
        </Box>

        <Box >
          <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px" width="70%" margin="auto">
            
              
            <Box  style={{ backgroundColor: colorMode == "light" ? "#edf2f8" : "#0f1624",}} borderRadius="5%"  boxShadow="2xl" _hover={{border:"2px solid red"}}>
              <Box >
                <Box >
                  <Img src={shop} alt="clockify" />
                </Box>

                <Box margin="5px 0px 5px 0px">
                  <Heading size="md" >SSENSE</Heading>
                </Box>
                <Box >
                  <p >
                    This app is a Fashon-Wear app of Mens and Womens and we can buy the Products from this app to our selected location.
                  </p>
                </Box>
                <Box >
                  <Heading size="sm" marginTop="10px">
                    <span style={{color:"#e4002b"}}>Tech Stack :</span> React-js, JavaScript, CSS, axios, Chakra UI.
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly"  marginTop="20px" marginBottom="10px">
                  <Box >
                    <a
                      href="https://github.com/akshaykadu24/SSCENCE.git"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href="https://project-sscence-mu.vercel.app/"
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </Box>
                  
                </HStack>
              </Box>
            </Box>
            <Box       style={{ backgroundColor: colorMode == "light" ? "#edf2f8" : "#0f1624",}} borderRadius="5%"  boxShadow="2xl" _hover={{border:"2px solid red"}}>
              <Box >
                <Box >
                  <Img src={indeed} alt="clockify" />
                </Box>

                <Box margin="5px 0px 5px 0px">
                  <Heading size="md" >Indeed.com <p></p>  (Group project)</Heading>
                </Box>
                <Box >
                  <p>
                    This website provides a job for jobseakers, a user can search a job as per his requirements like JobRole and where user want to search JobRole(location), If create a Employed account in site then user can Add the JobData in app.
                  </p>
                </Box>
                <Box >
                  <Heading size="sm" marginTop="10px">
                    <span style={{color:"#e4002b"}}>Tech Stack :</span> HTML, JavaScripts, CSS, API.
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly"  marginTop="20px" marginBottom="10px">
                  <Box >
                    <a
                      href="https://github.com/akshaykadu24/indeed.com-clone"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href="https://deft-florentine-9618bc.netlify.app/"
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box       style={{ backgroundColor: colorMode == "light" ? "#edf2f8" : "#0f1624",}} borderRadius="5%"  boxShadow="2xl" _hover={{border:"2px solid red"}}>
              <Box >
                <Box >
                  <Img src={food} alt="food" />
                </Box>

                <Box margin="5px 0px 5px 0px">
                  <Heading size="md" >kindmeal.my <p></p> (Group project)</Heading>
                </Box>
                <Box >
                  <p>
                    This website is a food order website as well show the full receipe instructions and reviews.
                  </p>
                </Box>
                <Box >
                  <Heading size="sm" marginTop="10px">
                    <span style={{color:"#e4002b"}}>Tech Stack :</span> JavaScript, API,
                    CSS, Html
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly"  marginTop="20px" marginBottom="10px">
                  <Box >
                    <a
                      href="https://github.com/akshaykadu24/kindmeal.my_clone"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href="https://teal-panda-e985d7.netlify.app"
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </Box>
                </HStack>
              </Box>
            </Box>
            
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
