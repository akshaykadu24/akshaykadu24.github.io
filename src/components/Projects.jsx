import React, { useEffect } from "react";
import { Box, Heading, HStack, Img, SimpleGrid, useColorMode } from "@chakra-ui/react";
import indeed from "./Images/project/indeed.png";
import shop from "./Images/project/ssense.png";
import nord from "./Images/project/nordstrom.png"
import wishkart from "./Images/project/wishkart.png"
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {

  }, [colorMode])
  return (
    <Box
      className="projects"
      paddingBottom="50px"
      style={{ backgroundColor: colorMode == "light" ? "#D5E6F9" : "#1a202c", }}>
      <Box  >
        <Box paddingTop="50px"
          paddingBottom="50px">
          <Heading >
            <span style={{ color: "#e4002b" }}>My</span> Creative <span style={{ color: "#e4002b" }}>Projects </span>Section
          </Heading>
        </Box>

        <Box >
          <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px" width="70%" margin="auto">

          <Box style={{ backgroundColor: colorMode == "light" ? "#AFDAFC" : "#0f1624", }} borderRadius="5%" boxShadow="2xl" _hover={{ border: "2px solid red" }}>
              <Box >
                <Box >
                  <Img src={wishkart} alt="wishkart" />
                </Box>

                <Box margin="5px 0px 5px 0px">
                  <Heading size="md" >WishKart <p></p> </Heading>
                </Box>
                <Box >
                  <p>
                    This website is a online products shopping e-commerse website.
                  </p>
                </Box>
                <Box >
                  <Heading size="sm" marginTop="10px">
                    <span style={{ color: "#e4002b" }}>Tech Stack :</span> React Redux,,JavaScript,Ckakra UI, Html, CSS
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly" marginTop="20px" marginBottom="10px">
                  <Box >
                    <a
                      href="https://github.com/akshaykadu24/Wishkart"
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
                      href="https://wishkart.vercel.app/"
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </Box>
                </HStack>
              </Box>
            </Box>

            <Box style={{ backgroundColor: colorMode == "light" ? "#AFDAFC" : "#0f1624", }} borderRadius="5%" boxShadow="2xl" _hover={{ border: "2px solid red" }}>
              <Box >
                <Box >
                  <Img src={nord} alt="clockify" />
                </Box>

                <Box margin="5px 0px 5px 0px">
                  <Heading size="md" >NordStrom<p></p></Heading>
                </Box>
                <Box >
                  <p >
                    This app is a E-commerce responcive website for fashion and lifestyle products with various filters.
                  </p>
                </Box>
                <Box >
                  <Heading size="sm" marginTop="10px">
                    <span style={{ color: "#e4002b" }}>Tech Stack :</span> React, Redux, JavaScript, CSS, axios, Chakra UI.
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly" marginTop="20px" marginBottom="10px">
                  <Box >
                    <a
                      href="https://github.com/akshaykadu24/NordStrom-Clone"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href="https://drive.google.com/file/d/1GormeSrFOllUcHqCOpQp9hhOiR9p9SuB/view?usp=share_link"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </Box>
                  <Box >
                    <a
                      href="https://nord-ecommerce-website.netlify.app/"
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </Box>

                </HStack>
              </Box>
            </Box>
            <Box style={{ backgroundColor: colorMode == "light" ? "#AFDAFC" : "#0f1624", }} borderRadius="5%" boxShadow="2xl" _hover={{ border: "2px solid red" }}>
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
                    <span style={{ color: "#e4002b" }}>Tech Stack :</span> React-js, JavaScript, CSS, axios, Chakra UI.
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly" marginTop="20px" marginBottom="10px">
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
            <Box style={{ backgroundColor: colorMode == "light" ? "#AFDAFC" : "#0f1624", }} borderRadius="5%" boxShadow="2xl" _hover={{ border: "2px solid red" }}>
              <Box >
                <Box >
                  <Img src={indeed} alt="clockify" />
                </Box>

                <Box margin="5px 0px 5px 0px">
                  <Heading size="md" >Indeed.com <p></p>  </Heading>
                </Box>
                <Box >
                  <p>
                    This website provides a job for jobseakers, a user can search a job as per his requirements like JobRole and where user want to search JobRole(location), If create a Employed account in site then user can Add the JobData in app.
                  </p>
                </Box>
                <Box >
                  <Heading size="sm" marginTop="10px">
                    <span style={{ color: "#e4002b" }}>Tech Stack :</span> HTML, JavaScripts, CSS, API.
                  </Heading>
                </Box>
                <HStack justifyContent="space-evenly" marginTop="20px" marginBottom="10px">
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
            

          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
