import { Box, Button, Circle, color, Flex, Image, Show, Spacer, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import profile from "./Images/Portfolio/profilePicSmall.jpg"
import Typewriter from "typewriter-effect";
import pdf from "../components/Download/Akshay_Kadu_Resume.pdf"

// import { FaGratipay } from 'react-icons/fa'

const Home = () => {
    const {colorMode} = useColorMode()
    const isDark = colorMode === "dark"

  const colorId = isDark? "dark":"#edf2f8"

  return (
    <Box className="home" backgroundColor={colorId} >
   <Show above="lg" >
    <Box  >

    
    <Flex  width="80%" margin="auto" paddingTop="90px" paddingBottom="100px"
            justifyContent="space-around">
        <Box  alignSelf="center" >
            <Text textAlign="start"  fontSize="xl" fontWeight="bold"  >Hello, My Name is</Text>
            <Text textAlign="start" fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text" >Akshay Kadu</Text>
            <Box  display="flex" alignItems="center" fontSize="34px" >
            
                    <p style={{marginTop:"-20px", fontWeight:"bold"}}>I'm a</p>
                    <span style={{fontWeight:"bold", color:"#e4002b", margin: "0 0 20px 5px"}} >
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
                  </Box>
            <Box  textAlign="start">
              <Button _hover={{color:"black"}} border="2px solid #e4002b" bg="#e4002b" color="white" onClick={()=>window.open("https://drive.google.com/file/d/1dqcFhIZJqrJ41niNwXhMIGWFq6rT3sx0/view?usp=share_link","_black")} ><a href={pdf} download="Akshay-Kadu-Resume">RESUME</a></Button>

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
            <Box display="flex" alignItems="center" fontSize="34px">

                    <p style={{marginTop:"-20px", fontWeight:"bold"}}>I'm a</p>
                    <span style={{fontWeight:"bold", color:"#e4002b", margin: "0 0 20px 5px"}} >
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
                  </Box>
            <Box  textAlign="start">
              <Button border="2px solid #e4002b" bg="#e4002b" color="white" ><a href={pdf} download="Akshay-Kadu-Resume">RESUME</a></Button>

           </Box>        
        </Box>
       </Box>
      </Show>
      </Box>
  )
}


export default Home