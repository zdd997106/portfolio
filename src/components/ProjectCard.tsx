"use client";

import { IconButton, Link, Stack, styled, Typography } from "@mui/material";
import Icons from "src/icons";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  img?: string;
  link?: {
    website?: string;
    github?: string;
  };
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  img,
  link,
}: ProjectCardProps) {
  const onlyWebsite = link?.website && ![link?.github].some(Boolean);

  // --- ELEMENT SECTIONS ---

  const sections = {
    image: <ImageCard src={img} sx={{ flexShrink: 0, width: { md: 450 } }} />,
    titles: (
      <Stack spacing={0.5}>
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>

        <Typography>{subtitle}</Typography>
      </Stack>
    ),
    description: (
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    ),
    website: link?.website && (
      <Link
        href={link.website}
        target="_blank"
        color="textSecondary"
        underline="hover"
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          <IconButton size="small" color="inherit">
            <Icons.InternetIcon
              fontSize="inherit"
              sx={{ fontSize: onlyWebsite ? "1em" : "1.5em" }}
            />
          </IconButton>

          {onlyWebsite && (
            <Typography variant="caption" color="textSecondary">
              {link.website.replace(/^https:\/\//, "")}
            </Typography>
          )}
        </Stack>
      </Link>
    ),
    github: link?.github && (
      <Link target="_blank" href={link.github} color="textSecondary">
        <IconButton size="small" color="inherit">
          <Icons.GitHubIcon fontSize="inherit" sx={{ fontSize: "1.5em" }} />
        </IconButton>
      </Link>
    ),
  };

  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      spacing={{ xs: 1, md: 5 }}
      alignItems="center"
    >
      {sections.image}
      <Stack spacing={2} paddingY={2}>
        {sections.titles}
        {sections.description}

        <Stack direction="row" spacing={1} alignItems="center">
          {sections.github}
          {sections.website}
        </Stack>
      </Stack>
    </Stack>
  );
}

// ----- STYLED -----

const ImageCard = styled("img")(({ theme }) => ({
  height: "auto",
  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "cover",
  background: theme.palette.action.active,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));
