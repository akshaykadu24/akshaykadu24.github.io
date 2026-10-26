import {
  Box,
  Flex,
  HStack,
  IconButton,
  Collapse,
  useDisclosure,
  useColorMode,
  Show,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun } from "react-icons/fa";
import  {Link}  from 'react-scroll';
import Home from './Home';
import  About  from './About';
import { Skills } from './Skills';
import {Contact} from "./Contact";
import { Projects} from "./Projects"




const ACCENT = "#e4002b";
// Google Drive direct-download link, so clicking downloads the pdf instead of opening Drive
const RESUME_LINK = "https://drive.google.com/uc?export=download&id=1JS__OX1UjnBB8OU8Ehx_WM2eGyKX69yK";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  const isDark = colorMode === "dark"

  // the link itself downloads the resume, this only closes the mobile menu
  const openResume = () => {
    onClose()
  }

  const linkStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "22px",
    textTransform: "uppercase",
    padding: "2px 8px",
    lineHeight: "1.4",
    borderRadius: "8px",
    _hover: { bg: ACCENT, color: "white" },
  }

  const resumeLink = (props) => (
    <Box
      as="a"
      href={RESUME_LINK}
      onClick={openResume}
      {...linkStyle}
      _hover={{ bg: "#0984c2", color: "white" }}
      {...props}
    >
      Resume
    </Box>
  )

  return (
    <>
      <Box
        position="fixed"
        top="0"
        width="100%"
        zIndex={3}
        bg={isDark ? "gray.900" : "blue.200"}
      >
        <Flex
          width={["90%", "90%", "85%", "85%"]}
          margin="auto"
          height="60px"
          align="center"
          justify="space-between"
        >
          <Box as={Link} to="home" smooth={true} cursor="pointer" onClick={onClose}>
            <Heading size="lg">Ak<span style={{ color: ACCENT }}>shay</span></Heading>
          </Box>

          {/* ----------------------------------------desktop------------------------------------------------- */}
          <Show above="800px">
            <HStack spacing="6px">
              {navItems.map((item) => (
                <Box key={item.to} as={Link} to={item.to} smooth={true} offset={-60} {...linkStyle}>
                  {item.label}
                </Box>
              ))}
              {resumeLink()}
              {/* HStack overrides child margins, so the gap goes on a wrapper */}
              <Box paddingLeft="26px">
                <IconButton
                  aria-label="Toggle color mode"
                  icon={isDark ? <FaSun /> : <FaMoon />}
                  isRound={true}
                  onClick={toggleColorMode}
                />
              </Box>
            </HStack>
          </Show>

          {/* ----------------------------------------Tablate and Mobile------------------------------------------------- */}
          <Show below="800px">
            <HStack spacing="8px">
              <IconButton
                aria-label="Toggle color mode"
                icon={isDark ? <FaSun /> : <FaMoon />}
                isRound={true}
                onClick={toggleColorMode}
              />
              <IconButton
                aria-label={isOpen ? "Close menu" : "Open menu"}
                icon={isOpen ? <CloseIcon boxSize="12px" /> : <HamburgerIcon boxSize="20px" />}
                onClick={onToggle}
              />
            </HStack>
          </Show>
        </Flex>

        <Show below="800px">
          <Collapse in={isOpen} animateOpacity>
            <Flex
              direction="column"
              width="90%"
              margin="auto"
              paddingY="10px"
              gap="4px"
            >
              {navItems.map((item) => (
                <Box
                  key={item.to}
                  as={Link}
                  to={item.to}
                  smooth={true}
                  offset={-60}
                  onClick={onClose}
                  {...linkStyle}
                  paddingY="8px"
                >
                  {item.label}
                </Box>
              ))}
              {resumeLink({ paddingY: "8px" })}
            </Flex>
          </Collapse>
        </Show>
      </Box>

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