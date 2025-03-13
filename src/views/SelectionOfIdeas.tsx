"use client";

import { Stack, Typography } from "@mui/material";
import ProjectCard from "src/components/ProjectCard";

export default function SelectionOfIdeasView() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        marginBottom={{ xs: 1, md: 10 }}
      >
        <Stack spacing={1} flexGrow={1} flexShrink={0} flexBasis={1}>
          <Typography variant="h2" sx={{ maxWidth: 500 }}>
            <a>A Selection of My</a> Ideas
          </Typography>

          <Typography variant="body1" color="textPrimary">
            I'm passionate about building tools and applications that help me
            and others to be more productive and efficient. Here are some of my
            ideas that I've been working on.
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={{ xs: 2, md: 10 }}>
        {ideas.map((idea, index) => (
          <ProjectCard
            key={index}
            img={idea.img}
            title={idea.title}
            subtitle={idea.role}
            github={idea.github}
            link={idea.link}
            description={idea.description}
          />
        ))}
      </Stack>
    </>
  );
}

// ----- DATA -----

const ideas = [
  {
    title: "ZPanel",
    img: "/zpanel.png",
    role: "Full Stack Engineer | Personal Project",
    github: "https://github.com/zdd997106/zpanel",
    link: "https://zpanel.zdd997.com",
    description:
      "ZPanel is a self-hosted admin dashboard I built to manage my personal projects. It’s a full-stack app using Next.js for the frontend, Nest.js, Prisma, and PostgreSQL for the backend, structured as a monorepo with pnpm, and deployed on Vercel.",
  },
  {
    title: "Gexii - My JS Toolbox",
    img: "/github.png",
    github: "https://github.com/gexii/gexii",
    role: "JavaScript Developer | Public Repository",
    description:
      "Gexii is a collection of JavaScript utilities and UI components designed to streamline development workflows. Built with React, TypeScript, and Material-UI, it serves as a personal toolkit for reusable functions and interface elements.",
  },
];
