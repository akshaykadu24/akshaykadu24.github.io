import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { FiMail } from "react-icons/fi";
import { Box, Button, color, Heading, HStack, Img, Input, SimpleGrid, Textarea, useColorMode } from "@chakra-ui/react";
import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { Typewriter } from 'react-simple-typewriter';

export const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()
    // console.log(e.target.user_name.value)
    // emailjs
    //   .sendForm(
    //     "service_5h90sgm",
    //     "template_u1tdmba",
    //     form.current,
    //     "hXcQ_GBwksMfhF8mb"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <Box
    className="contact"
      style={{
        backgroundColor: colorMode == "light" ? "#D5E6F9" : "#1a202c",
      }}
     
    >
      <Box >
        <Box>
          <Heading paddingTop="50px">
            Con<span style={{color:"#e4002b"}}>tact</span>
          </Heading>
        </Box>

        <Box >
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="50px">
            <Box width={["70%","70%","70%","95%"]} margin="auto">
              <Box style={{ padding: "80px 0 0 0" }}>
                <Img
                  src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                  alt="Contact"
                />
              </Box>
            </Box>
            <Box>
              <Box width="90%" margin="auto" marginTop="60px">
                <Box >
                  <SimpleGrid columns={[1, 2, 2, 2]} spacing="15px">
                    <Box backgroundColor="#0984c2" borderRadius="lg" width="95%" color="white"  >
                      <a
                        href="https://www.linkedin.com/in/akshay-kadu-847311193/"
                        target="_blank"
                      >
                        <HStack spacing="20px" marginTop="4px" paddingBottom="10px" paddingTop="6px" marginLeft="20px" >
                          <FaLinkedin size="10%"  />
                          <Heading size="sm"fontSize="sm" >LinkedIn</Heading>
                        </HStack>
                      </a>
                    </Box>
                    <Box backgroundColor="#272424" borderRadius="lg" width="95%" color="white" >
                      <a
                        href="https://github.com/akshaykadu24"
                        target="_blank"
                      >
                        <HStack spacing="20px" marginTop="4px" paddingBottom="10px" paddingTop="6px" marginLeft="20px" >
                          <FaGithub size="10%"  />
                          <Heading size="sm"fontSize="sm" >GitHub</Heading>
                        </HStack>
                      </a>
                    </Box>
                    <Box backgroundColor="#e20d0d" borderRadius="lg" width="95%" color="white" >
                      <a
                        href="mailto:akshaykadu24@gmail.com"
                        target="_blank"
                      >
                        <HStack spacing="10px" marginTop="4px" paddingBottom="10px" paddingTop="6px" marginLeft="4%" >
                          <FiMail size="10%"  />
                          <Heading size="sm"fontSize="sm" >akshaykadu24@gmail.com</Heading>
                        </HStack>
                      </a>
                    </Box>
                    <Box backgroundColor="#0984c2" borderRadius="lg" width="95%" color="white" >
                      <a
                        href="https://wa.me/9579550881"
                        target="_blank"
                      >
                        <HStack spacing="20px" marginTop="4px" paddingBottom="10px" paddingTop="6px" marginLeft="20px" >
                          <AiOutlineWhatsApp size="10%"  />
                          <Heading size="sm"fontSize="sm" >WhatsApp</Heading>
                        </HStack>
                      </a>
                    </Box>
                    <Box backgroundColor="#0984c2" borderRadius="lg" width="95%" color="white" >
                      <a
                        href="/"
                        target="_blank"
                      >
                        <HStack spacing="20px" marginTop="4px" paddingBottom="10px" paddingTop="6px" marginLeft="20px" >
                          <BiPhoneCall size="10%"  />
                          <Heading size="sm"fontSize="sm" >9579550881</Heading>
                        </HStack>
                      </a>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box marginTop="20px" border="1px solid gray " borderRadius="3%">
                  <form ref={form} onSubmit={sendEmail}>
                    <Box >
                      <Input
                        required={true}
                        name="user_name"
                        type="text"
                        placeholder="Full Name"
                      />
                    </Box>
                    <Box >
                      <Input
                        required={true}
                        name="user_email"
                        type="text"
                        placeholder="Email"
                      />
                    </Box>
                    <Box>
                      <Input
                        required={true}
                        type="number"
                        placeholder="Number"
                      />
                    </Box>
                    <Box  >
                      <Textarea
                        required={true}
                        name="message"
                        type="text"
                        placeholder="Your Message"
                      />
                    </Box>
                    <Box>
                      <Button type="submit" backgroundColor="#e4002b" color="white" _hover={{backgroundColor:"#eb144c"}}>
                        Send Message
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <br/>
      <Box className="footer" style={{textAlign:"center" }}>
            <span style={{fontSize:'20px',  color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Made with 💗 by Akshay kadu']}
            loop={5000000000}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
        </Box>
    </Box>
  );
};
