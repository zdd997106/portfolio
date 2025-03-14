"use client";

import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import { Portfolio } from "src/types";

// ----------

export interface FormViewProps {
  data: Portfolio.ContactDto;
}

export default function FormView({ data }: FormViewProps) {
  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ minHeight: "30vh" }}>
        <Stack flexGrow={1} flexShrink={0} flexBasis={1} spacing={1}>
          <Typography variant="h2">{data.title}</Typography>

          <Typography variant="body1">{data.subtitle}</Typography>
        </Stack>
      </Stack>

      <Box component="form">
        <Stack spacing={2}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <StyledTextField fullWidth label="Name" />
            <StyledTextField fullWidth label="Email" />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <StyledTextField fullWidth label="Budget Range (USD)" />
            <StyledTextField fullWidth label="Services" />
          </Stack>

          <StyledTextField label="Project Description" multiline rows={5} />

          <Stack direction="row" justifyContent="end">
            <Button color="inherit" variant="outlined">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

// ----- STYLED -----

const StyledTextField = styled(TextField)(() => ({
  [`&&&&& *`]: {
    color: "inherit",
    borderColor: "currentColor",
    borderWidth: 2,
  },
}));
