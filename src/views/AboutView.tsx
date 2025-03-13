"use client";

import { Divider, Stack, Typography } from "@mui/material";
import { findLastIndex } from "lodash";
import { Fragment } from "react";

export default function AboutView() {
  return (
    <Stack direction="row" alignItems="center">
      <Stack flexGrow={1} flexShrink={0} flexBasis={1} spacing={2}>
        <Typography variant="h2">About me</Typography>

        {contents.map(({ title, content }, index) => (
          <Fragment key={index}>
            <Typography variant="subtitle1" color="textPrimary">
              {title}
            </Typography>

            {content.split("\n").map((paragraph, jIndex) => (
              <Typography
                key={`${index} ${jIndex}`}
                variant="body1"
                color="textSecondary"
              >
                {paragraph}
              </Typography>
            ))}

            {index !== findLastIndex(contents) && (
              <Divider sx={{ paddingTop: { xs: 2, md: 5 }, border: "none" }} />
            )}
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
}

// ----- DATA -----

const contents = [
  {
    title: "Discovering My Passion",
    content:
      "I discovered my passion for software development between 2015 and 2019 while studying Computer Science at National Chi-Nan University in Taiwan. I was drawn to problem-solving and building things with code, which led me to join the Web Knowledge and Extraction Lab, where I gained hands-on experience in project development. During this time, I honed my skills in JavaScript, Python, and MS SQL while working on real-world applications.",
  },
  {
    title: "Become A Software Engineer",
    content:
      "After graduating, I started my career as a front-end developer in Taipei. From 2020 to 2023, I worked at two different types of companies, one project-based and the other product-focused. This experience gave me valuable insights into teamwork, client communication, and building products from the ground up.",
  },
  {
    title: "The Freelancer Journey & A New Perspective",
    content:
      "In 2023, I had the opportunity to work in the UK and took the leap to explore a new environment. While my initial plan was to land a full-time job, I ended up embracing freelancing instead. This shift allowed me to collaborate with diverse clients while traveling across the UK and Europe. Along the way, I completed the Camino de Santiago in Spain, visited numerous countries, and gained a fresh perspective on remote work and lifestyle flexibility.\nToday, I continue to refine my craft as a software engineer while embracing new challenges and adventures. Whether it’s building scalable applications, optimizing performance, or collaborating with global teams, I’m always excited to push the boundaries of what I can create.",
  },
];
