"use client";

import { Box, AppBar as MuiAppBar, Slide, Stack, Toolbar } from "@mui/material";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import Icons from "src/icons";

export default function AppBar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!globalThis.window) return;

    const callback = throttle((event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 3) return;

      if (event.deltaY > 0) setShow(false);
      else setShow(true);
    }, 100);

    window.document.body.addEventListener("wheel", callback);
    return () => window.document.body.removeEventListener("wheel", callback);
  }, []);

  return (
    <Slide direction="down" in={show} appear={false}>
      <MuiAppBar>
        <Toolbar sx={{ typography: "subtitle1", fontWeight: 800 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Icons.ZIcon color="secondary" fontSize="large" />
            <Box>Zedd Zhong</Box>
          </Stack>
        </Toolbar>
      </MuiAppBar>
    </Slide>
  );
}
