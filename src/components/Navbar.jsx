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
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import  About  from './About';
import { Skills } from './Skills';
import {Contact} from "./Contact";
import { Projects} from "./Projects"




export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  const isDark = colorMode === "dark"

  console.log(isOpen)
  return (
    <>
    {/* ----------------------------------------desktop------------------------------------------------- */}
      <Show above='800px' >
        <Box bg={useColorModeValue('gray.100', 'gray.900')} position="fixed" width="100%" >
          <Flex >
            <Box>
              <Box fontSize="22px" m="10px" fontWeight="bold" ><Heading  size="lg">Ak<span style={{color:"#e4002b"}}>shay</span></Heading></Box>
            </Box>
            <Spacer/>
            <Box>
              <Box fontSize="22px" m="5px" >
                <Flex >
                <Box _hover={{bg:"#e4002b",color:"white" }}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="/" ></Link></Box>

                  <Box _hover={{bg:"#e4002b",color:"white" }}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="/home" >HOME</Link></Box>
                  <Box _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="/about" >ABOUT</Link></Box>
                  <Box _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="/projects" >PROJECTS</Link></Box>
                  <Box _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><Link to="/skills" >SKILLS</Link></Box>
                  <Box _hover={{bg:"#e4002b",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"   fontWeight='bold' ><Link to="/contact" >CONTACT</Link></Box>
                  <Box _hover={{bg:"#0984c2",color:"white"}}paddingTop="5px" borderRadius="12%"  padding="5px 5px 0px 5px"  fontWeight='bold' ><a href={pdf} download="Akshay-Kadu-Resume">RESUME</a></Box>
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
        <Box bg={useColorModeValue('gray.100', 'gray.900')} position="fixed" width="100%">
          <Flex justifyContent="space-between"  >
          <Box fontSize="22px" m="10px" fontWeight="bold" ><Heading  size="lg">Ak<span style={{color:"#e4002b"}}>shay</span></Heading></Box>
            <Box>
              {isOpen ? (
                <SimpleGrid columns={[1 ,1]}  >

                  <Button  fontWeight='bold' ><Link to="/home" >HOME</Link></Button>
                  <Button  fontWeight='bold' ><Link to="/about" >ABOUT</Link></Button>
                  <Button  fontWeight='bold' ><Link to="/projects" >PROJECTS</Link></Button>
                  <Button  fontWeight='bold' ><Link to="/skills" >SKILLS</Link></Button>
                  <Button  fontWeight='bold' ><Link to="/contact" >CONTACT</Link></Button>
                  <Button  fontWeight='bold' ><a href={pdf} download="Akshay-Kadu-Resume"> RESUME </a></Button>
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
                    display={{ md: 'none' }}
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

       
      <Home />
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