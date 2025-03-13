import { alpha, Components, Theme } from "@mui/material";

export const overwrites: Components<Theme> = {
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        background: alpha(theme.palette.background.default, 0.5),
        boxShadow: "none",
        // background: "transparent",
        backdropFilter: "blur(10px)",
      }),
    },
  },

  MuiButton: {
    defaultProps: {
      variant: "contained",
      color: "inherit",
    },

    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 500,
        borderWidth: 2,
      },
    },
  },
};
