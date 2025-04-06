import { Box, Container, Stack } from "@mui/material";

import DotsMask from "src/components/DotsMask";
import Recorder from "src/components/Recorder";
import { Api, PortfolioDto } from "src/types";

import AboutView from "src/views/AboutView";
import FormView from "src/views/FormView";
import OpeningView from "src/views/OpeningView";
import SelectionOfIdeasView from "src/views/SelectionOfIdeas";
import SelectionOfWorksView from "src/views/SelectionOfWorksView";
import ServicesView from "src/views/ServicesView";

// --- CONFIGS ---

const revalidate = Number(process.env.REVALIDATE || 60);

// ----------

export default async function Page() {
  const response = await fetch(`${process.env.API_URL}/projects/portfolio`, {
    next: { revalidate },
    headers: {
      [`x-vercel-protection-bypass`]:
        process.env.API_VERCEL_AUTOMATION_BYPASS_SECRET || "",
      [`x-zpanel-protection-bypass`]:
        process.env.API_ZPANEL_AUTOMATION_BYPASS_SECRET || "",
    },
  });

  const { data } = (await response.json()) as Api.Response<PortfolioDto>;

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
        <OpeningView data={data.opening} />
      </Container>
    ),

    selectionOfWorks: (
      <Container id="works" component={Box} paddingY={{ xs: 10, md: 15 }}>
        <SelectionOfWorksView data={data.selectionOfWorks} />
      </Container>
    ),

    selectionOfIdeas: (
      <Container id="ideas" component={Box} paddingY={{ xs: 10, md: 15 }}>
        <SelectionOfIdeasView data={data.selectionOfIdeas} />
      </Container>
    ),

    services: (
      <Box
        id="services"
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
          <ServicesView data={data.services} />
        </Container>
      </Box>
    ),

    about: (
      <Box position="relative" id="about">
        <Container
          component={Box}
          paddingY={{ xs: 10, md: 15 }}
          minHeight="100vh"
        >
          <AboutView data={data.aboutMe} />
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
          <FormView data={data.contact} />
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

      <Recorder />
    </>
  );
}
