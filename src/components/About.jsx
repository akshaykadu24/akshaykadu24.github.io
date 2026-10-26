import React from "react";

import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const ACCENT = "#e4002b";

const experience = [
  {
    role: "Software Developer",
    company: "NeoSOFT",
    period: "May 2025 – Present",
    project: "Multi-Service Travel Ecosystem",
    summary:
      "Large-scale travel platform for Activities, Flights, Hotels, Holiday Packages, Loyalty Points, Visa Services and VAC applications, built on a shared codebase with a multi-theme architecture.",
    points: [
      "Built the Activities service from scratch: listing and detail pages, booking journeys and API integrations",
      "Implemented a multi-theme architecture serving multiple brands from a single codebase",
      "Delivered end-to-end i18n and localization (Arabic, Korean, Portuguese) with RTL support for Arabic",
      "Built booking, cancellation, refund and user-management workflows on top of REST APIs for availability, pricing, loyalty and visa services",
      "Created reusable components and shared modules, and improved SEO, performance and responsiveness",
    ],
    tech: ["REST API", "i18n", "RTL", "Multi-theme", "SEO", "Agile"],
  },
  {
    role: "Full Stack Developer",
    company: "Global Market Insights",
    period: "Apr 2023 – May 2025",
    project: "Global Market Insights & GMI Pulse",
    summary:
      "Enterprise research and analytics platforms, including a subscription-based client portal for market research reports, dashboards and premium content.",
    points: [
      "Developed frontend and backend features with React.js, Node.js and MongoDB",
      "Cut API response times by up to 40% with Redis caching",
      "Built GMI Pulse with role-based access control and subscription-tier management",
      "Developed dashboards and secure report-access workflows for enterprise clients",
      "Added SEO enhancements and Google Tag Manager tracking",
    ],
    tech: ["React", "Node.js", "MongoDB", "Redis", "REST API", "GTM"],
  },
];

const About = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box  padding={["55px","30px","50px","60px"]} pl={["0px",'0px',"50px","50px"]} pr={["0px",'0px',"50px","50px"]} border="0px solid red" className="about">
      <Box >
        <Heading>
          About <span style={{color:ACCENT}}>Me</span>
        </Heading>
      </Box>

      <Box margin={["0px","0px","30px","30px"]} pt={["20px",'30px',"0px","0px"]} pb={["20px",'30px',"0px","0px"]} border="0px solid red">
              <Box textAlign="start" width={["90%", "90%", "80%", "80%"]} margin="auto"  >
              <UnorderedList spacing={4}>
                    <ListItem>
                      Hello! I'm Akshay Kadu, a Full Stack Developer with 4 years of
                      experience building scalable, production-ready web applications
                      with React, Next.js, Node.js and MongoDB.
                    </ListItem>
                    <ListItem>
                      I'm currently a Software Developer at NeoSOFT, working on a large-scale
                      multi-service travel platform covering activities, flights, hotels,
                      holidays, loyalty and visa services.
                    </ListItem>
                    <ListItem>
                      I enjoy building reusable components, multi-brand theming and fully
                      localized interfaces, including right-to-left layouts for Arabic.
                    </ListItem>
                    <ListItem>
                      Before that, at Global Market Insights, I built subscription portals and
                      dashboards for enterprise clients and cut API response times by up to
                      40% with Redis caching.
                    </ListItem>
                    <ListItem>
                      Outside work, I build full-stack products like CV Builder, a resume
                      builder with live preview, multiple templates and Razorpay payments.
                    </ListItem>
                  </UnorderedList>
              </Box>
      </Box>

      <Heading size="lg" marginTop={["10px", "20px", "40px", "40px"]} marginBottom="30px">
        My <span style={{ color: ACCENT }}>Experience</span>
      </Heading>

      {/* timeline: red line on the left with a dot per role */}
      <Box width={["90%", "90%", "80%", "80%"]} margin="auto" textAlign="start">
        {experience.map((job, index) => (
          <Flex key={job.company} gap={["14px", "20px"]}>
            <Flex direction="column" align="center" flexShrink={0}>
              <Box boxSize="16px" borderRadius="full" bg={ACCENT} marginTop="22px" border="3px solid" borderColor={isDark ? "#1a202c" : "white"} boxShadow={`0 0 0 2px ${ACCENT}`} />
              {index < experience.length - 1 && (
                <Box width="2px" flex="1" bg={ACCENT} opacity="0.3" />
              )}
            </Flex>

            <Box
              flex="1"
              marginBottom="24px"
              padding={["16px", "22px"]}
              borderRadius="16px"
              bg={isDark ? "#0f1624" : "#F4F8FD"}
              border="1px solid"
              borderColor={isDark ? "whiteAlpha.200" : "blackAlpha.100"}
              boxShadow="md"
            >
              <Flex justify="space-between" align={["flex-start", "center"]} direction={["column", "row"]} gap="6px">
                <Box>
                  <Heading size="md">{job.role}</Heading>
                  <Text fontWeight="semibold" color={ACCENT}>
                    {job.company}
                  </Text>
                </Box>
                <Tag size="md" borderRadius="full" bg={isDark ? "whiteAlpha.200" : "#D5E6F9"} flexShrink={0}>
                  {job.period}
                </Tag>
              </Flex>

              <Text fontWeight="bold" marginTop="12px" fontSize="sm">
                {job.project}
              </Text>
              <Text fontSize="sm" color={isDark ? "gray.300" : "gray.600"} marginTop="4px">
                {job.summary}
              </Text>

              <List spacing="6px" fontSize="sm" marginTop="12px">
                {job.points.map((point) => (
                  <ListItem key={point} display="flex" alignItems="flex-start">
                    <ListIcon as={FaCheckCircle} color={ACCENT} mt="3px" />
                    {point}
                  </ListItem>
                ))}
              </List>

              <Wrap spacing="8px" marginTop="14px">
                {job.tech.map((item) => (
                  <WrapItem key={item}>
                    <Tag size="sm" borderRadius="full" bg={isDark ? "whiteAlpha.100" : "#EAF3FD"} color={isDark ? "gray.200" : "gray.700"}>
                      {item}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default About
