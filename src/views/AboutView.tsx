"use client";

import { Stack, Typography } from "@mui/material";

import { Portfolio } from "src/types";

// ----------

export interface AboutViewProps {
  data: Portfolio.AboutMeDto;
}

export default function AboutView({ data }: AboutViewProps) {
  return (
    <Stack direction="row" alignItems="center">
      <Stack flexGrow={1} flexShrink={0} flexBasis={1} spacing={2}>
        <Typography variant="h2">{data.title}</Typography>

        {data.content
          .split(/\n\n+/)
          .map((sentence) => sentence.split("\n"))
          .flat()
          .map((paragraph, index) => {
            if (paragraph[0] === "#")
              return (
                <Typography
                  key={index}
                  variant="subtitle1"
                  color="textPrimary"
                  sx={{ paddingTop: 4 }}
                >
                  {paragraph.replace(/^#+/, "")}
                </Typography>
              );

            return (
              <Typography key={index} variant="body1" color="textSecondary">
                {paragraph}
              </Typography>
            );
          })}
      </Stack>
    </Stack>
  );
}
