import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  Wrap,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";
import shop from "./Images/project/ssense.png";
import nord from "./Images/project/nordstrom.png"
import musicose from "./Images/project/musicose.png"
import cvbuilder from "./Images/project/cvbuilder.png"
import { FaGithub, FaEye, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const ACCENT = "#e4002b";

// Add a new project at the top of this list to show it first
const projects = [
  {
    title: "CV Builder",
    image: cvbuilder,
    badge: "Latest",
    description:
      "Full-stack resume builder to create, customize and download professional resumes. Users can keep multiple resumes per account and see a live preview while they type.",
    highlights: [
      "Secure signup / login with JWT authentication",
      "Dashboard to manage multiple resumes per user",
      "Live-preview editor with Simple, Balanced, Colorful, Modern and Classic templates",
      "PDF download with Razorpay payments for premium resumes",
    ],
    tech: ["Next.js", "React", "JWT", "REST API", "Razorpay", "PDF Generation"],
    github: "https://github.com/akshaykadu24/cv-builder-frontend",
    live: "https://cv-builder-frontend-seven.vercel.app/",
  },
  {
    title: "Musicose",
    badge: "Featured",
    image: musicose,
    description:
      "Full-stack multi-vendor e-commerce platform for audio products and smartwatches, with separate user and admin portals.",
    highlights: [
      "Secure login with JWT + bcrypt and role-based access for users, vendors and admins",
      "Vendors manage only their own products based on assigned permissions",
      "Product search, filtering, sorting and recommendations",
      "Persistent cart with live price calculation",
      "REST APIs with Node.js, Express and MongoDB (Mongoose)",
    ],
    tech: ["React", "Redux", "Chakra UI", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    github: "https://github.com/akshaykadu24/Musicose",
    live: "https://musicose.vercel.app/",
  },
  {
    title: "NordStrom",
    badge: "Mini Project",
    minor: true,
    image: nord,
    description:
      "This app is a E-commerce responcive website for fashion and lifestyle products with various filters.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "axios", "Chakra UI"],
    github: "https://github.com/akshaykadu24/NordStrom-Clone",
    demo: "https://drive.google.com/file/d/1GormeSrFOllUcHqCOpQp9hhOiR9p9SuB/view?usp=share_link",
    live: "https://nord-strom.vercel.app/",
  },
  {
    title: "SSENSE",
    badge: "Mini Project",
    minor: true,
    image: shop,
    description:
      "This app is a Fashon-Wear app of Mens and Womens and we can buy the Products from this app to our selected location.",
    tech: ["HTML", "CSS", "JavaScript", "React", "axios", "Chakra UI"],
    github: "https://github.com/akshaykadu24/SSCENCE.git",
    live: "https://project-sscence-mu.vercel.app/",
  },
];

const ProjectCard = ({ project, isDark }) => {
  const { title, image, badge, minor, description, highlights, tech, github, demo, live } = project;

  return (
    <Flex
      direction="column"
      textAlign="left"
      bg={isDark ? "#0f1624" : "white"}
      borderRadius="16px"
      overflow="hidden"
      border="1px solid"
      borderColor={isDark ? "whiteAlpha.200" : "blackAlpha.100"}
      boxShadow="lg"
      transition="all 0.3s ease"
      role="group"
      _hover={{ transform: "translateY(-8px)", boxShadow: "2xl", borderColor: ACCENT }}
    >
      <Box position="relative" overflow="hidden" borderBottom="1px solid" borderColor={isDark ? "whiteAlpha.200" : "blackAlpha.100"}>
        <Image
          src={image}
          alt={title}
          width="100%"
          height="230px"
          objectFit="cover"
          objectPosition="top"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.02)" }}
        />
      </Box>

      <Flex direction="column" flex="1" p="22px" gap="14px">
        <Flex align="center" justify="space-between" gap="10px">
          <Heading size="md">{title}</Heading>
          {badge && (
            <Badge
              bg={minor ? (isDark ? "whiteAlpha.200" : "gray.100") : ACCENT}
              color={minor ? (isDark ? "gray.300" : "gray.600") : "white"}
              px="10px"
              py="4px"
              borderRadius="full"
              fontSize="xs"
              flexShrink={0}
            >
              {badge}
            </Badge>
          )}
        </Flex>

        <Text fontSize="sm" color={isDark ? "gray.300" : "gray.600"}>
          {description}
        </Text>

        {highlights && (
          <List spacing="6px" fontSize="sm">
            {highlights.map((point) => (
              <ListItem key={point} display="flex" alignItems="flex-start">
                <ListIcon as={FaCheckCircle} color={ACCENT} mt="3px" />
                {point}
              </ListItem>
            ))}
          </List>
        )}

        <Wrap spacing="8px">
          {tech.map((item) => (
            <WrapItem key={item}>
              <Tag
                size="sm"
                borderRadius="full"
                variant="subtle"
                bg={isDark ? "whiteAlpha.100" : "#EAF3FD"}
                color={isDark ? "gray.200" : "gray.700"}
              >
                {item}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        <HStack spacing="10px" mt="auto" pt="6px">
          {live && (
            <Button as="a" href={live} target="_blank" rel="noreferrer" size="sm" leftIcon={<FaExternalLinkAlt />} bg={ACCENT} color="white" _hover={{ bg: "#b80023" }}>
              Live
            </Button>
          )}
          {github && (
            <Button as="a" href={github} target="_blank" rel="noreferrer" size="sm" leftIcon={<FaGithub />} variant="outline">
              Code
            </Button>
          )}
          {demo && (
            <Button as="a" href={demo} target="_blank" rel="noreferrer" size="sm" leftIcon={<FaEye />} variant="ghost">
              Demo
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export const Projects = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      className="projects"
      paddingBottom="50px"
      style={{ backgroundColor: isDark ? "#1a202c" : "#D5E6F9" }}>
      <Box paddingTop="55px" paddingBottom="50px">
        <Heading>
          <span style={{ color: ACCENT }}>My</span> Creative <span style={{ color: ACCENT }}>Projects </span>Section
        </Heading>
      </Box>

      <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px" width={["90%", "90%", "85%", "75%"]} margin="auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isDark={isDark} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
