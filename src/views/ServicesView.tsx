"use client";

import {
  Box,
  Card,
  Grid2 as Grid,
  Stack,
  styled,
  SvgIcon,
  Typography,
} from "@mui/material";

import { Portfolio } from "src/types";
import Icons, { IconVariant } from "src/icons";

// ----------

export interface ServicesViewProps {
  data: Portfolio.ServicesDto;
}

export default function ServicesView({ data }: ServicesViewProps) {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        paddingY={5}
        sx={{ minHeight: "30vh" }}
      >
        <Stack flexGrow={1} flexShrink={0} flexBasis={1} spacing={1}>
          <Typography variant="h2">{data.title}</Typography>
          <Typography variant="body1">{data.subtitle}</Typography>
        </Stack>
      </Stack>

      <Grid container spacing={5}>
        {data.items.map((service, index) => {
          return (
            <Grid key={index} component={StyledCard} size={{ xs: 12, md: 4 }}>
              <CardOutline zIndex={2} />

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

                  <StyledIcon
                    as={Icons[service.icon as IconVariant] || SvgIcon}
                  />
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
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

const CardOutline = styled(Box)(() => ({
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
