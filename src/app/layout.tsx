import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { DialogsProvider } from "gexii";

import { ThemeProvider } from "src/theme";
import AppBar from "src/components/Appbar";

import "./globals.css";

// ----------

export const metadata: Metadata = {
  title: "Zedd's Portfolio",
  description: "Powered by Next JS, Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <DialogsProvider>
              <AppBar />
              {children}
            </DialogsProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
