import { Box, Container, Stack } from "@mui/material";

import DotsMask from "src/components/DotsMask";

import AboutView from "src/views/AboutView";
import FormView from "src/views/FormView";
import OpeningView from "src/views/OpeningView";
import SelectionOfIdeasView from "src/views/SelectionOfIdeas";
import SelectionOfWorksView from "src/views/SelectionOfWorksView";
import ServicesView from "src/views/ServicesView";

export default function Page() {
  // --- ELEMENT SECTIONS ---

  const sections = {
    banner: (
      <Container
        component={Stack}
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          paddingY: 5,
        }}
      >
        <OpeningView />
      </Container>
    ),

    selectionOfWorks: (
      <Container component={Box} paddingY={{ xs: 10, md: 15 }}>
        <SelectionOfWorksView />
      </Container>
    ),

    selectionOfIdeas: (
      <Container component={Box} paddingY={{ xs: 10, md: 15 }}>
        <SelectionOfIdeasView />
      </Container>
    ),

    services: (
      <Box
        bgcolor="primary.main"
        color="primary.contrastText"
        position="relative"
      >
        <DotsMask color="#0005" />

        <Container
          component={Box}
          position="relative"
          zIndex={2}
          paddingY={{ xs: 10, md: 15 }}
          minHeight="100vh"
        >
          <ServicesView />
        </Container>
      </Box>
    ),

    about: (
      <Box position="relative">
        <Container
          component={Box}
          paddingY={{ xs: 10, md: 15 }}
          minHeight="100vh"
        >
          <AboutView />
        </Container>
      </Box>
    ),

    form: (
      <Box
        id="contact"
        bgcolor="secondary.dark"
        color="secondary.contrastText"
        position="relative"
        overflow="clip"
      >
        <DotsMask
          color="#FFF1"
          sx={{ scale: "1.5 -1.5", translate: "25% 15%" }}
        />

        <Container
          component={Box}
          paddingY={{ xs: 10, md: 15 }}
          minHeight="100vh"
          maxWidth="md"
        >
          <FormView />
        </Container>
      </Box>
    ),
  };

  return (
    <>
      {sections.banner}
      {sections.selectionOfWorks}
      {sections.selectionOfIdeas}
      {sections.services}
      {sections.about}
      {sections.form}
    </>
  );
}
