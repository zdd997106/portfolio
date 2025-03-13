"use client";

import { Box, styled } from "@mui/material";

const Background = styled(Box)<{ src?: string }>(({ src }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "none",
  backgroundImage: src ? `url(${src})` : undefined,
}));

export default Background;
