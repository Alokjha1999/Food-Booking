import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "3rem",
              
            },
          },
        }}
      >
        <Typography variant="h4">Tarrace Restaurant</Typography>
        <p>
        Welcome to my restaurant, where we take pride in serving delicious food made with fresh, local ingredients. We have a wide variety of dishes to choose from, so you're sure to find something to your taste. Our friendly and attentive staff is always happy to help you choose the perfect meal. We hope you enjoy your dining experience with us!
        </p>
        <br />
        <p>
        The atmosphere of your restaurant, such as whether it's casual or formal, or whether it has a certain theme.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
