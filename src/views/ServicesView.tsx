"use client";

import { Box, Card, Stack, styled, SvgIcon, Typography } from "@mui/material";
import Icons, { IconVariant } from "src/icons";

export default function ServicesView() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        paddingY={5}
        sx={{ minHeight: "30vh" }}
      >
        <Stack flexGrow={1} flexShrink={0} flexBasis={1} spacing={1}>
          <Typography variant="h2">Services</Typography>

          <Typography variant="body1">
            I provide full-cycle digital product development, from frontend and
            backend engineering to database architecture and performance
            optimization, delivering high-quality, scalable web applications.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        sx={{ "& > div": { flexGrow: 1, flexBasis: 1, flexShrink: 0 } }}
      >
        {services.map((service, index) => {
          const Icon = Icons[service.icon as IconVariant] || SvgIcon;
          return (
            <Stack key={index} component={StyledCard}>
              <Outline zIndex={2} />

              <Stack component={ContentRoot} zIndex={1}>
                <Stack height="100%" sx={{ translate: "-5px -5px" }}>
                  <Typography
                    variant="h4"
                    component="p"
                    marginBottom={2}
                    fontWeight={600}
                  >
                    {service.title}
                  </Typography>

                  <Typography variant="body2">{service.description}</Typography>

                  <StyledIcon as={Icon} />
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}

// ----- STYLED -----

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  color: "inherit",
  boxShadow: theme.shadows[0],
  borderRadius: theme.spacing(5),
  background: "transparent",
  translate: "-5px -5px",
  overflow: "visible",
}));

const Outline = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  border: "solid 5px #FFF",
  position: "absolute",
  top: 0,
  left: 0,
  borderRadius: "inherit",
  rotate: "-1deg",
  pointerEvents: "none",
}));

const ContentRoot = styled(Box)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(135deg, #0005, #FFF1)",
  backdropFilter: "blur(4px)",
  padding: [theme.spacing(3), theme.spacing(5)].join(" "),
  borderRadius: "inherit",

  translate: "10px 10px",
}));

const StyledIcon = styled(SvgIcon)(({ theme }) => ({
  fontSize: "8em",
  margin: "auto",
  paddingTop: theme.spacing(4),
  marginBottom: 0,
}));

// ----- DATA -----

const services = [
  {
    title: "Development",
    description:
      "Building high-quality websites and applications with React, Next.js, NestJS, TypeScript, and other modern frameworks.",
    icon: "LaptopIcon",
  },
  {
    title: "Consulting",
    description:
      "Expert guidance on project architecture, performance optimization, frontend, backend, and database design.",
    icon: "IdeaIcon",
  },
  {
    title: "Support",
    description:
      "Ongoing maintenance, performance tuning, and feature enhancements to keep your project running smoothly.",
    icon: "PowerIcon",
  },
];
