import { Box, Button, Circle, Flex, Image, Show, Spacer, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"
import profile from "../Images/Portfolio/profilePicSmall.jpg"
import Typewriter from "typewriter-effect";
// import { FaGratipay } from 'react-icons/fa'

const Home = () => {
    const {colorMode} = useColorMode()
    const isDark = colorMode === "dark"

  const colorId = isDark? "dark":"home"

  return (
    <Box >
   <Show above="lg" >
    <Box id={colorId} >

    
    <Flex  width="80%" margin="auto" paddingTop="50px" paddingBottom="200px"
            justifyContent="space-around">
        <Box  alignSelf="center" >
            <Text textAlign="start"  fontSize="xl" fontWeight="bold"  >Hello, My Name is</Text>
            <Text textAlign="start" fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text" >Akshay Kadu</Text>
            <div className="full">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer.",
                            "Mern Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
            <Box  textAlign="start">
              <Button border="2px solid #e4002b" bg="#e4002b" color="white" ><a href="./Download/Akshay_Kadu_Resume.pdf" download>RESUME</a></Button>

           </Box>        
        </Box>
        <Spacer/>
        <Box  >
          {
            isDark? <Circle position="absolute" margin="30px "   bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"  ></Circle>
            :       <Circle position="absolute" margin="30px "   bg="black" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"  ></Circle>

          }
          <Image alignContent="center"  marginTop="80px"  opacity="1.1" borderRadius="full"  boxSize="300px"  src={profile} />
        </Box>
      
    </Flex>
    </Box>
   </Show>
      <Show below='lg' >
        <Box id={colorId} paddingTop="1px" >
          
        
        <Box  >
          {
            isDark? <Circle position="absolute" margin="-30px 30%"   bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"  ></Circle>
            :       <Circle position="absolute" margin="-30px 30%"   bg="black" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"  ></Circle>

          }
          <Image alignContent="center" margin="auto" marginRight="30%" marginTop="80px"  opacity="1.1" borderRadius="full"  boxSize="300px"  src={profile} />
        </Box>
        <Box  alignSelf="center" width="70%" margin="auto">
            <Text textAlign="start"  fontSize="xl" fontWeight="bold"  >Hello, My Name is</Text>
            <Text textAlign="start" fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text" >Akshay Kadu</Text>
            <div className="full">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer.",
                            "Mern Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
            <Box  textAlign="start">
              <Button border="2px solid #e4002b" bg="#e4002b" color="white" ><a href="./Download/Akshay_Kadu_Resume.pdf" download>RESUME</a></Button>

           </Box>        
        </Box>
       </Box>
      </Show>
      </Box>
  )
}


export default Home