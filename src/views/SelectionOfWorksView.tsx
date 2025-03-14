"use client";

import { Stack, Typography } from "@mui/material";

import { Portfolio } from "src/types";
import ProjectCard from "src/components/ProjectCard";

// ----------

export interface SelectionOfWorksViewProps {
  data: Portfolio.SelectionDto;
}

export default function SelectionOfWorksView({
  data,
}: SelectionOfWorksViewProps) {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        marginBottom={{ xs: 1, md: 10 }}
      >
        <Stack spacing={1} flexGrow={1} flexShrink={0} flexBasis={1}>
          <Typography variant="h2" sx={{ maxWidth: 500 }}>
            {data.title}
          </Typography>

          <Typography variant="body1" color="textPrimary">
            {data.subtitle}
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={{ xs: 5, md: 10 }}>
        {data.items.map((work, index) => (
          <ProjectCard
            key={index}
            img={work.img.url}
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
