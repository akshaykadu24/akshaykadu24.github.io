import { Box, Button, Flex, HStack, Image, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import profile from "./Images/Portfolio/profilePicSmall.jpg"
import Typewriter from "typewriter-effect";
import { scroller } from "react-scroll";

const ACCENT = "#e4002b"
// Google Drive direct-download link, so clicking downloads the pdf instead of opening Drive
const RESUME_LINK = "https://drive.google.com/uc?export=download&id=1JS__OX1UjnBB8OU8Ehx_WM2eGyKX69yK"

const Home = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const scrollToProjects = () => scroller.scrollTo("projects", { smooth: true, offset: -60 })

  return (
    <Box className="home" backgroundColor={isDark ? "dark" : "#D5E6F9"}>
      <Flex
        width={["90%", "85%", "80%", "80%"]}
        margin="auto"
        paddingTop={["100px", "110px", "110px", "150px"]}
        paddingBottom={["60px", "70px", "70px", "180px"]}
        direction={["column", "column", "column", "row"]}
        align="center"
        justify="space-between"
        gap={["36px", "40px", "40px", "60px"]}
      >
        {/* photo first on mobile, on the right on desktop */}
        <Box order={[0, 0, 0, 1]} position="relative" flexShrink={0}>
          <Box
            position="absolute"
            top={["14px", "18px", "18px", "24px"]}
            left={["14px", "18px", "18px", "24px"]}
            boxSize={["220px", "260px", "260px", "300px"]}
            borderRadius="full"
            bg={isDark ? "blue.100" : "black"}
            opacity="0.1"
          />
          <Image
            position="relative"
            borderRadius="full"
            boxSize={["220px", "260px", "260px", "300px"]}
            objectFit="cover"
            src={profile}
            alt="Akshay Kadu"
          />
        </Box>

        <Box textAlign={["center", "center", "center", "start"]}>
          <Text fontSize={["16px", "18px", "20px", "xl"]} fontWeight="bold">
            Hello, My Name is
          </Text>
          <Text
            fontSize={["40px", "48px", "56px", "6xl"]}
            fontWeight="bold"
            lineHeight="1.2"
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            Akshay Kadu
          </Text>

          {/* fixed height so the layout doesn't jump while the text types */}
          <Flex
            fontSize={["20px", "24px", "30px", "34px"]}
            fontWeight="bold"
            gap="8px"
            minHeight="1.5em"
            marginTop="6px"
            justify={["center", "center", "center", "flex-start"]}
          >
            <span>I'm a</span>
            <Box as="span" color={ACCENT}>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer.",
                    "MERN Stack Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Box>
          </Flex>

          <HStack
            spacing="12px"
            marginTop="28px"
            justify={["center", "center", "center", "flex-start"]}
          >
            <Button
              as="a"
              href={RESUME_LINK}
              border={`2px solid ${ACCENT}`}
              bg={ACCENT}
              color="white"
              _hover={{ bg: "#b80023", borderColor: "#b80023" }}
            >
              RESUME
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              borderWidth="2px"
              borderColor={ACCENT}
              color={ACCENT}
              _hover={{ bg: ACCENT, color: "white" }}
            >
              VIEW PROJECTS
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}


export default Home
