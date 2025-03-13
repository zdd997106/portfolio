import type { TypographyOptions } from "@mui/material/styles/createTypography";

import { Raleway, Inter } from "next/font/google";

import { Theme } from "@mui/material";

// ----------------------------------------------------------------------

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties["fontFamily"];
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }
  interface TypographyVariantsOptions {
    fontSecondaryFamily?: React.CSSProperties["fontFamily"];
    fontWeightSemiBold?: React.CSSProperties["fontWeight"];
  }
  interface ThemeVars {
    typography: Theme["typography"];
  }
}

// ----------------------------------------------------------------------

export const titleFont = Raleway();

export const defaultFont = Inter();

// ----------------------------------------------------------------------

export const typography: TypographyOptions = {
  fontFamily: defaultFont.style.fontFamily,
  fontWeightLight: "300",
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightSemiBold: "600",
  fontWeightBold: "700",
  h1: {
    fontFamily: titleFont.style.fontFamily,
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: inRem(36),
    ...responsiveFontSizes({ sm: 58, md: 78, lg: 78 }),
  },
  h2: {
    fontFamily: titleFont.style.fontFamily,
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: inRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: titleFont.style.fontFamily,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: inRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: titleFont.style.fontFamily,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: inRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: titleFont.style.fontFamily,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: inRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: titleFont.style.fontFamily,
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: inRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    ...responsiveFontSizes({ sm: 18, md: 20 }),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    ...responsiveFontSizes({ sm: 16, md: 18 }),
  },
  body1: {
    lineHeight: 1.5,
    ...responsiveFontSizes({ sm: 16, md: 18 }),
  },
  body2: {
    lineHeight: 22 / 14,
    ...responsiveFontSizes({ sm: 14, md: 16 }),
  },
  caption: {
    lineHeight: 1.5,
    ...responsiveFontSizes({ sm: 12, md: 14 }),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: inRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: inRem(14),
    textTransform: "unset",
  },
};

// Helpers -----

function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm?: number;
  md?: number;
  lg?: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: sm && inRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: md && inRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: lg && inRem(lg),
    },
  };
}

function inRem(px: number) {
  return `${px / 16}rem`;
}
