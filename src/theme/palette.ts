// ----------

export const primary = {
  light: "#757ce8",
  main: "#3f50b5",
  dark: "#002884",
  contrastText: "#fff",
};

export const secondary = {
  light: "#455a64",
  main: "#37474f",
  dark: "#263238",
  contrastText: "#FFFFFF",
};

const base = {
  primary,
  secondary,
};

export const palette = {
  ...base,
  text: {
    primary: "#111111",
    secondary: "#4F4F4F",
    disabled: "#AFAFAF",
  },
  background: {
    paper: "#FFFFFF",
    default: "#FFFFFF",
  },
};
