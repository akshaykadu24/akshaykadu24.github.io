import React from "react";
import "./SoftSkills.css";
import { SimpleGrid, Box, useColorMode } from "@chakra-ui/react";
import collaborative from "../Images/skills/collabrative.png";
import creative_thinking from "../Images/skills/creativity1.png";
import problem_solving from "../Images/skills/problemSolv.png";
import time_management from "../Images/skills/timeManage.png";

import frontend from "../Images/skills/frontend-icon-22.jpg";
import backend from "../Images/skills/backend.png";
import dsa from "../Images/skills/dsa.png";
import Project_Management from "../Images/skills/projectManagement.png";

export const SoftSkills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className="main_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <div className="softskills_container">
        <div className="softskills_header">
          <h2>
            My <span>Skills</span>
          </h2>
        </div>
        {/* --------------------------SoftSkills------------------------------------------- */}
        <div className="softskills">
          <div className="softskills_text">
            <h2>Soft Skills</h2>
          </div>

          <SimpleGrid columns={[1, 2, 2, 4]} spacing="60px">
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={collaborative} alt="dsa" />
              </div>
              <p>Collaborative</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={creative_thinking} alt="dsa" />
              </div>
              <p>Creative Thinking</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={problem_solving} alt="dsa" />
              </div>
              <p>Problem Solving</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={time_management} alt="dsa" />
              </div>
              <p>Time Tanagement</p>
            </Box>
          </SimpleGrid>
        </div>

        {/* --------------------------Tech Skills------------------------------------------- */}
        <div className="softskills">
          <div className="softskills_text">
            <h2>Tech Skills</h2>
          </div>

          <SimpleGrid columns={[1, 2, 2, 4]} spacing="60px">
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={frontend} alt="dsa" />
              </div>
              <p>Frontend</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={backend} alt="dsa" />
              </div>
              <p>Backend</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={dsa} alt="dsa" />
              </div>
              <p>DSA</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={Project_Management} alt="dsa" />
              </div>
              <p>Project Management</p>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
