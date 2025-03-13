"use client";

import { Box, Button, Stack, styled, Typography } from "@mui/material";

export default function OpeningView() {
  // --- ELEMENT SECTIONS ---

  const sections = {
    profileImage: (
      <ProfileImage>
        <Box component="img" src="/image.jpg" />
      </ProfileImage>
    ),
    text: (
      <StyledTextRoot>
        <Typography variant="h1">
          <Box component="b" fontWeight={900}>
            JS & TS
          </Box>
          <br />
          Full Stack Engineer
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ marginTop: 2, maxWidth: 700, opacity: 0.8 }}
        >
          Hi I'm Zedd, I build dynamic websites, powerful dashboards, and
          business applications tailored to real-world needs
        </Typography>
      </StyledTextRoot>
    ),
    buttonGroup: (
      <Stack direction="row" spacing={2}>
        <ContrastButton href="#contact">Contact me</ContrastButton>

        <ContrastButton variant="outlined" href="/zedd-cv.docx">
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

const ProfileImage = styled(Box)(() => ({
  height: "min(400px, 80vw)",
  width: "min(400px, 80vw)",
  borderRadius: "40%",
  rotate: "16deg",
  overflow: "clip",

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
