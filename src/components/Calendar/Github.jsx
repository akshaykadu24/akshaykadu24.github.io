import { Box } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

function Github() {
  return (
    <Box className="github">
      <Box className="github_text">
        <h2>
          Github <span>Calendar</span>
        </h2>
      </Box>
      <Box className="cal">
        <GitHubCalendar username="akshaykadu24" />
      </Box>
      
    </Box>
  );
}

export default Github;
