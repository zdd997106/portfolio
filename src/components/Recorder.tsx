"use client";

import { useEffect, useState } from "react";

export default function Recorder() {
  const [mounted, setMounted] = useState(false);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    if (!mounted) return setMounted(true);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "visible") setRecording(true);
      else setRecording(false);
    });

    onEnter();
    window.onbeforeunload = () => onLeave();
  }, [mounted]);

  useEffect(() => {
    if (!recording) return;

    const timeout = setTimeout(() => {
      onReenter();
    }, 5 * 1000); // Make sure the user is not just switching tabs, 5 seconds for debouncing

    const interval = setInterval(() => {
      onUpdate();
    }, 60 * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [recording]);

  return null;
}

function onEnter() {
  void fetch("/api/analytics/visit", { method: "POST", keepalive: true });
}

function onLeave() {
  void fetch("/api/analytics/visit", { method: "DELETE", keepalive: true });
}

function onUpdate() {
  void fetch("/api/analytics/visit", { method: "PATCH", keepalive: true });
}

function onReenter() {
  void fetch("/api/analytics/visit", { method: "PUT", keepalive: true });
}
