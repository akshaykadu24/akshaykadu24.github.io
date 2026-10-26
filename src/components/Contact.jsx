import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { FiArrowUp, FiMail, FiSend } from "react-icons/fi";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { animateScroll } from "react-scroll";

const ACCENT = "#e4002b";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshay-kadu-847311193/",
    icon: FaLinkedin,
    color: "#0A66C2",
    newTab: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/akshaykadu24",
    icon: FaGithub,
    color: "#24292F",
    newTab: true,
  },
  {
    label: "akshaykadu24@gmail.com",
    href: "mailto:akshaykadu24@gmail.com",
    icon: FiMail,
    color: ACCENT,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919579550881",
    icon: AiOutlineWhatsApp,
    color: "#1DA851",
    newTab: true,
  },
  {
    label: "+91 9579550881",
    href: "tel:+919579550881",
    icon: BiPhoneCall,
    color: "#0984c2",
    fullWidth: true,
  },
];

export const Contact = () => {
  const { colorMode } = useColorMode();
  const form = useRef();
  const toast = useToast();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_qa5g20o",
        "template_o2nfpk4",
        form.current,
        "uQhFg78GSWtJjIFQJ",
      )
      .then(
        () => {
          // reset only after sending, otherwise EmailJS reads an empty form
          form.current.reset();
          toast({
            title: "Message sent",
            description: "Thanks! I'll get back to you soon.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Message not sent",
            description: "Please try again or email me directly.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        },
      )
      .finally(() => setSending(false));
  };

  const isDark = colorMode === "dark";
  const cardStyle = {
    bg: isDark ? "#0f1624" : "white",
    borderRadius: "16px",
    border: "1px solid",
    borderColor: isDark ? "whiteAlpha.200" : "blackAlpha.100",
    boxShadow: "lg",
  };
  const inputStyle = {
    bg: isDark ? "whiteAlpha.50" : "gray.50",
    borderColor: isDark ? "whiteAlpha.300" : "gray.200",
    focusBorderColor: ACCENT,
    size: "sm",
    height: "38px",
    borderRadius: "8px",
  };

  return (
    <Box
      className="contact"
      paddingBottom="30px"
      style={{
        backgroundColor: isDark ? "#1a202c" : "#D5E6F9",
      }}
    >
      <Heading paddingTop="50px" paddingBottom="40px">
        Con<span style={{ color: ACCENT }}>tact</span>
      </Heading>

      <SimpleGrid
        columns={[1, 1, 1, 2]}
        spacing="50px"
        width={["90%", "90%", "85%", "85%"]}
        margin="auto"
        alignItems="center"
      >
        <Box display={["none", "none", "none", "block"]}>
          <Image
            src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
            alt="Contact"
          />
        </Box>

        <Flex direction="column" gap="20px" textAlign="left">
          <SimpleGrid columns={[1, 2]} spacing="12px">
            {contactLinks.map((link) => (
              <HStack
                key={link.label}
                as="a"
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noreferrer" : undefined}
                gridColumn={link.fullWidth ? ["auto", "span 2"] : "auto"}
                spacing="12px"
                padding="12px 16px"
                borderRadius="12px"
                bg={link.color}
                color="white"
                boxShadow="md"
                transition="all 0.2s ease"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              >
                <Box as={link.icon} boxSize="20px" flexShrink={0} />
                <Text fontWeight="bold" fontSize="sm" noOfLines={1}>
                  {link.label}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>

          <Box {...cardStyle} padding={["18px", "22px"]}>
            <Heading size="md" marginBottom="4px">
              Send me a message
            </Heading>
            <Text
              fontSize="sm"
              color={isDark ? "gray.400" : "gray.600"}
              marginBottom="14px"
            >
              I usually reply within a day.
            </Text>

            <form ref={form} onSubmit={sendEmail}>
              <Flex direction="column" gap="12px">
                <SimpleGrid columns={[1, 2]} spacing="12px">
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" marginBottom="4px">Full Name</FormLabel>
                    <Input
                      name="user_name"
                      type="text"
                      placeholder="Your name"
                      {...inputStyle}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" marginBottom="4px">Phone Number</FormLabel>
                    <Input
                      name="user_number"
                      type="tel"
                      placeholder="Your phone number"
                      {...inputStyle}
                    />
                  </FormControl>
                </SimpleGrid>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" marginBottom="4px">Email</FormLabel>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="you@example.com"
                    {...inputStyle}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" marginBottom="4px">Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="How can I help you?"
                    rows={3}
                    resize="vertical"
                    {...inputStyle}
                    height="auto"
                    fontSize="sm"
                  />
                </FormControl>
                <Button
                  type="submit"
                  width="100%"
                  isLoading={sending}
                  loadingText="Sending..."
                  leftIcon={<FiSend />}
                  backgroundColor={ACCENT}
                  color="white"
                  _hover={{ backgroundColor: "#b80023" }}
                >
                  Send Message
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </SimpleGrid>
      <Flex
        className="footer"
        width={["90%", "90%", "85%", "85%"]}
        margin="40px auto 0"
        paddingTop="20px"
        borderTop="1px solid"
        borderColor={isDark ? "whiteAlpha.200" : "blackAlpha.200"}
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        gap="10px"
        fontSize="sm"
        color={isDark ? "gray.400" : "gray.600"}
      >
        <Text>
          Made with <Box as={FaHeart} display="inline" verticalAlign="-2px" color={ACCENT} /> by{" "}
          <Text as="span" fontWeight="bold" color={isDark ? "white" : "gray.800"}>
            Akshay Kadu
          </Text>
        </Text>
        <HStack
          as="button"
          spacing="6px"
          fontWeight="semibold"
          transition="color 0.2s ease"
          _hover={{ color: ACCENT }}
          onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        >
          <Text>Back to top</Text>
          <FiArrowUp />
        </HStack>
      </Flex>
    </Box>
  );
};
