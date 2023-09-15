import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkdinIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "white", color: "black", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
          <LinkdinIcon />
        </Box>
        <Typography
          variant="h7"
          sx={{
            "@media (max-width:100px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          All Rights Reserved 2023 &copy; Alok TechUniverse
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
