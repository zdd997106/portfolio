"use client";

import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import { Field, Form, useAction, useDialogs } from "gexii";
import { useForm } from "react-hook-form";

import * as api from "src/utils/api";
import { Portfolio } from "src/types";

// ----------

export interface FormViewProps {
  data: Portfolio.ContactDto;
}

export default function FormView({ data }: FormViewProps) {
  const dialogs = useDialogs();

  const methods = useForm();

  // --- PROCEDURES ---

  const sendContactFormData = useAction(api.sendContactFormData, {
    onSuccess: () => {
      void dialogs.alert(
        "Success",
        "Thank you for your message! We'll get back to you soon.",
        { onClose: () => methods.reset() },
      );
    },
    onError: () => {
      void dialogs.alert(
        "Error",
        "Something went wrong. Please try again later.",
      );
    },
  });

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ minHeight: "30vh" }}>
        <Stack flexGrow={1} flexShrink={0} flexBasis={1} spacing={1}>
          <Typography variant="h2">{data.title}</Typography>

          <Typography variant="body1">{data.subtitle}</Typography>
        </Stack>
      </Stack>

      <Form
        component="form"
        methods={methods}
        onSubmit={(values: Record<string, unknown>) =>
          sendContactFormData.call(values)
        }
      >
        <Stack spacing={2}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Field name="name" variant="pure" defaultValue="">
              <StyledTextField fullWidth label="Name" required />
            </Field>

            <Field name="email" variant="pure" defaultValue="">
              <StyledTextField fullWidth label="Email" required type="email" />
            </Field>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Field name="budget" variant="pure" defaultValue="">
              <StyledTextField fullWidth label="Budget Range (USD)" />
            </Field>

            <Field name="service" variant="pure" defaultValue="">
              <StyledTextField fullWidth label="Services" />
            </Field>
          </Stack>

          <Field name="description" variant="pure" defaultValue="">
            <StyledTextField label="Project Description" multiline rows={5} />
          </Field>

          <Stack direction="row" justifyContent="end">
            <Button
              type="submit"
              color="inherit"
              variant="outlined"
              loading={sendContactFormData.isLoading()}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Form>
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
