import { ReactNode } from 'react';
import pdf from "../components/Download/Akshay_Kadu_Resume.pdf"
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Show,
  SimpleGrid,
  Spacer,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun } from "react-icons/fa";
import { Routes, Route } from 'react-router-dom';
import  {Link,scroll}  from 'react-scroll';
import Home from './Home';
import  About  from './About';
import { Skills } from './Skills';
import {Contact} from "./Contact";
import { Projects} from "./Projects"




export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  const isDark = colorMode === "dark"

  const MobResumeButton =()=>{
    window.open("https://drive.google.com/file/d/1PW0oarQKUlCUoDq8WO8dnBKRAYoelsZB/view?usp=share_link","_black")
     onClose()
    console.log("ak")
  }

  console.log(isOpen)
  return (
    <>
    {/* ----------------------------------------desktop------------------------------------------------- */}
      <Show  above='800px' >
        <Box bg={useColorModeValue("blue.200", 'gray.900')} position="fixed" width="100%" zIndex={3} >
          <Flex  m="0px 10px 0px 20px">
            <Box>
              <Box cursor={"pointer"} fontSize="22px" m="10px" fontWeight="bold" ><Link to='home' smooth={true}><Heading  size="lg">Ak<span style={{color:"#e4002b"}}>shay</span></Heading></Link></Box>
            </Box>
            <Spacer/>
            <Box>
              <Box fontSize="22px" m="5px" mr={"10px"}  >
                <Flex >
                <Box _hover={{bg:"#e4002b",color:"white" }}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="/" ></Link></Box>

                  <Box cursor={"pointer"} _hover={{bg:"#e4002b",color:"white" }}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="home"  smooth={true} >HOME</Link></Box>
                  <Box cursor={"pointer"} _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="about"  smooth={true} >ABOUT</Link></Box>
                  <Box cursor={"pointer"} _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="projects"  smooth={true} >PROJECTS</Link></Box>
                  <Box cursor={"pointer"} _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="skills" smooth={true}>SKILLS</Link></Box>
                  <Box cursor={"pointer"} _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"   fontWeight='bold' ><Link to="contact" smooth={true}>CONTACT</Link></Box>
                  <Box cursor={"pointer"} _hover={{bg:"#0984c2",color:"white"}} style={{_hover:<h1>ak</h1>}} paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' onClick={()=>window.open("https://drive.google.com/file/d/1PW0oarQKUlCUoDq8WO8dnBKRAYoelsZB/view?usp=share_link","_black")} ><a href={pdf} download="fw19_0616-Akshay-Kadu-Resume">RESUME</a></Box>
                  {/* <Link to="/home" >HOME</Link> */}


                  <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} ></IconButton>


                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>

      </Show>
          {/* ----------------------------------------Tablate and Mobile------------------------------------------------- */}

      <Show below='800px'>
        <Box bg={useColorModeValue('blue.200', 'gray.900')} position="fixed" zIndex={3} width="100%">
          <Flex justifyContent="space-between"  >
          <Box fontSize="22px" m="10px" fontWeight="bold" ><Link to="home" ><Heading  size="lg">Ak<span style={{color:"#e4002b"}}>shay</span></Heading></Link></Box>
            <Box>
              {isOpen ? (
                <SimpleGrid columns={[1 ,1]}  >

                  <Button  fontWeight='bold' onClick={isOpen ? onClose : onOpen} ><Link to="home" smooth={true} >HOME</Link></Button>
                  <Button  fontWeight='bold' onClick={isOpen ? onClose : onOpen} ><Link to="about" smooth={true} >ABOUT</Link></Button>
                  <Button  fontWeight='bold' onClick={isOpen ? onClose : onOpen} ><Link to="projects" smooth={true} >PROJECTS</Link></Button>
                  <Button  fontWeight='bold' onClick={isOpen ? onClose : onOpen} ><Link to="skills" smooth={true} >SKILLS</Link></Button>
                  <Button  fontWeight='bold' onClick={isOpen ? onClose : onOpen} ><Link to="contact" smooth={true} >CONTACT</Link></Button>
                  <Button  fontWeight='bold' onClick={()=>MobResumeButton()} ><a href={pdf} download="fw19_0616-Akshay-Kadu-Resume"> RESUME </a></Button>
                </SimpleGrid >
              ) : null}
            </Box>
            <Box >
              <Flex>


                <Box fontSize="22px" m="10px" >
                  <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} ></IconButton>

                </Box>
                <Box>
                  <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ lg: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    marginTop={"10px"}
                    marginRight="5"
                  />
                </Box>

              </Flex>




            </Box>
          </Flex>



          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>

            </Box>
          ) : null}

        </Box>

      </Show>

       
       <Box onChange={isOpen ? onClose : onOpen}>

      <Home />
       </Box>
      <About/>
      <Projects />
      <Skills/>
      <Contact />     
          

      {/* <Routes>
        <Route path='/' element={<Home />} >HOME</Route>
        <Route path='/home' element={<Home />} >HOME</Route>
        <Route path='/about' element={<About/>} >ABOUT</Route>
        <Route path='/projects' element={<Projects />} >PROJECTS</Route>
        <Route path='/skills' element={<Skills/>} >SKILLS</Route>
        <Route path='/contact' element={<Contact />} >CONTACT</Route>
      </Routes> */}

    </>

  );
}