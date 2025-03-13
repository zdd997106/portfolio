"use client";

import { Stack, Typography } from "@mui/material";
import ProjectCard from "src/components/ProjectCard";

export default function SelectionOfWorksView() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        marginBottom={{ xs: 1, md: 10 }}
      >
        <Stack spacing={1} flexGrow={1} flexShrink={0} flexBasis={1}>
          <Typography variant="h2" sx={{ maxWidth: 500 }}>
            <a>A Selection of Recent</a> Works
          </Typography>

          <Typography variant="body1" color="textPrimary">
            A showcase of projects where I designed, built, and optimized
            solutions for fintech, SaaS, and IT services
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={{ xs: 5, md: 10 }}>
        {works.map((work, index) => (
          <ProjectCard
            key={index}
            img={work.img}
            title={work.title}
            subtitle={work.role}
            link={work.link}
            description={work.description}
          />
        ))}
      </Stack>
    </>
  );
}

// ----- DATA -----

const works = [
  {
    title: "Data Management System | MEXC Global",
    img: "/mexc.png",
    role: "Frontend Developer | Team Lead",
    link: "https://www.mexc.com",
    description:
      "MEXC Global is one of the largest cryptocurrency exchanges worldwide. As a development team leader, I led the frontend team in building a robust data management system for clients and internal staff, ensuring high performance and scalability.",
  },
  {
    title: "TSMC Online | Cloud Interactive",
    img: "/tsmc.png",
    role: "Front-End Developer",
    description:
      "TSMC Online is an internal platform providing reports and confidential documents for TSMC's staff and clients. In the project at Cloud Interactive, I played a key role in front-end development, optimizing UI/UX for efficiency and security in handling sensitive data.",
  },
  {
    title: "Swimple",
    img: "/swimple.png",
    role: "Full Stack Engineer | Outsourcing",
    link: "https://swimple.com",
    description:
      "Swimple is a marketplace connecting pool owners with renters. I contributed to both frontend and backend development, improving platform usability and responsiveness to enhance the user experience.",
  },
  {
    title: "SparkAmplify",
    img: "/sparkamplify.png",
    role: "Full Stack Engineer | Outsourcing",
    link: "https://www.sparkamplify.com",
    description:
      "SparkAmplify is a PR platform that connects companies with journalists and influencers. I optimized data queries and processing, significantly improving platform performance and efficiency.",
  },
];
