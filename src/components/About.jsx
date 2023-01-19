import React from "react";

import { Box, Heading, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";


 const About = () => {
 
  return (
    <Box  margin={["0px","50px","50px","50px"]} className="about">
      <Box >
        <Heading>
          All <span style={{color:"#e4002b"}}>About</span> Me And My <span style={{color:"#e4002b"}}>Experience</span>
        </Heading>
      </Box>

      <Box margin={["0px","0px","30px","30px"]}> 
              <Box textAlign="start" width="80%" margin="auto"  >
              <UnorderedList spacing={4}>
                    <ListItem>
                      Hello! My name is Akshay Kadu and I enjoy creating things that live 
                      on the internet.
                    </ListItem>
                    <ListItem>
                      I'm a passionate Developer, with strong administrative and
                      communication skills, good attention to detail and the
                      ability to write efficient code using MERN Stack.
                    </ListItem>
                    <ListItem>
                      My interest in web development started back last year when
                      I was trying to edit things on the web, that thought me a
                      lot about HTML& CSS.
                    </ListItem>
                    
                    <ListItem>
                      Fast Forwarding to today, I built a number of web
                      applications and major projects. Learned a great deal
                      about teamwork, leadership, and communication. After
                      months of rigorous training, here l am looking for an
                      opportunity as a full stack web developer.
                    </ListItem>
                  </UnorderedList>
              </Box>
        
       
      </Box>
    </Box>
  );
};

export default About