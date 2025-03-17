"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Box, Button, Stack, styled, Typography } from "@mui/material";

import { Portfolio } from "src/types";
import { createMediaUrl } from "src/utils/createMediaUrl";

// ----------

export interface OpeningViewProps {
  data: Portfolio.OpeningDto;
}

export default function OpeningView({ data }: OpeningViewProps) {
  // --- ELEMENT SECTIONS ---

  const sections = {
    profileImage: (
      <ProfileImage>
        <Image
          src={createMediaUrl(data.avatar)}
          width={480}
          height={400}
          alt="Avatar"
        />
      </ProfileImage>
    ),
    text: (
      <StyledTextRoot>
        <Typography variant="h1">{decodeText(data.title)}</Typography>

        <Typography
          variant="subtitle1"
          sx={{ marginTop: 2, maxWidth: 700, opacity: 0.8 }}
        >
          {data.subtitle}
        </Typography>
      </StyledTextRoot>
    ),
    buttonGroup: (
      <Stack direction="row" spacing={2}>
        <ContrastButton href="#contact">Contact me</ContrastButton>

        <ContrastButton
          variant="outlined"
          href={`${createMediaUrl(data.cv)}?filename=${encodeURIComponent("Zedd-Zhong-CV")}`}
        >
          Download CV
        </ContrastButton>
      </Stack>
    ),
  };

  return (
    <Root
      direction={{ md: "row", xs: "column" }}
      flexWrap={{ md: "wrap" }}
      spacing={{ md: 8 }}
      flexGrow={1}
    >
      <Stack
        flexGrow={{ md: 2 }}
        paddingBottom={{ xs: "5vh", md: 0 }}
        justifyContent="center"
        alignItems="end"
      >
        {sections.profileImage}
      </Stack>

      <Stack spacing={3} flexGrow={{ md: 3 }}>
        {sections.text}
        {sections.buttonGroup}
      </Stack>
    </Root>
  );
}

// ----- STYLED -----

const Root = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "center",
  height: "100%",

  "& > div": { flexShrink: 0, flexBasis: 1 },
}));

const ProfileImage = styled(Box)(({ theme }) => ({
  height: "min(400px, 80vw)",
  width: "min(400px, 80vw)",
  borderRadius: "40%",
  rotate: "16deg",
  overflow: "clip",
  background: theme.palette.action.hover,

  img: {
    height: "100%",
    width: "120%",
    objectPosition: "140%",
    objectFit: "cover",
    rotate: "-16deg",
    scale: "1.1",
  },
}));

const StyledTextRoot = styled(Stack)(({ theme }) => ({
  alignItems: "start",

  h1: {
    background: `-webkit-linear-gradient(60deg, ${theme.palette.text.primary} 10%, ${theme.palette.text.disabled} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "#0000",
  },
}));

const ContrastButton = styled(Button)(({ theme, variant = "contained" }) => ({
  textTransform: "none",
  ...(variant === "contained"
    ? {
        background: theme.palette.text.primary,
        color: theme.palette.background.default,
      }
    : {}),
}));

// ----- HELPERS -----

function decodeText(text: string) {
  return text.split(/\*\*([^]+)\*\*/).map((token, i) =>
    i % 2 === 0 ? (
      <Fragment key={i}>{token}</Fragment>
    ) : (
      <Box key={i} fontWeight={900}>
        {token}
      </Box>
    ),
  );
}
