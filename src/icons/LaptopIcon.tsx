"use client";

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function LaptopIcon({
  viewBox = "0 0 24 24",
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox={viewBox}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19h2m1-13l2 2l-2 2m-4-4L8 8l2 2"
        />
      </g>
    </SvgIcon>
  );
}
