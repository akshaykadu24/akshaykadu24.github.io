import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import indeed from "../Images/project/indeed.png";
import shop from "../Images/project/ssense.png";
import food from "../Images/project/kindmeal.png"
import { FaGithub, FaEye } from "react-icons/fa";

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      id="project"
      className="project_main_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <div className="project_container">
        <div className="project_heading">
          <h2>
            <span>My</span> Creative <span>Projects </span>Section
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" margin="auto">
            
              
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={shop} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>S-SENSE</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This app is a Fashon-Wear app of Mens and Womens and we can buy the Products from this app to our selected location.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React-js, JavaScript, CSS, axios, Chakra UI.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/akshaykadu24/S-SCENCE.git"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://project-sscence-mu.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={indeed} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Indeed.com <p></p>  (Group project)</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website provides a job for jobseakers, a user can search a job as per his requirements like JobRole and where user want to search JobRole(location), If create a Employed account in site then user can Add the JobData in app.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, JavaScripts, CSS, API.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/akshaykadu24/indeed.com-clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://deft-florentine-9618bc.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={food} alt="food" />
                </div>

                <div className="project_name">
                  <h2>kindmeal.my <p></p> (Group project)</h2>
                </div>
                <div className="project_desc">
                  <p>
                    {/* This website is a clone of "Urban Company" I implimented
                    some functionalities like login & signup for the
                    authentication, add services, buy services, blog page, etc. */}
                    This website is a food order website as well show the full receipe instructions and reviews.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> JavaScript, API,
                    CSS, Html
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/akshaykadu24/kindmeal.my_clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://cute-fairy-d32e92.netlify.app"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
