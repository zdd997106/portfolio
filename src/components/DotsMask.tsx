"use client";

import { styled } from "@mui/material";

import Background from "./Background";

const DotsMask = styled(Background)<{ color: string }>(({ color }) => ({
  background: color,
  mask: 'url("/dots-mask.svg") center center / cover no-repeat',
}));

export default DotsMask;
