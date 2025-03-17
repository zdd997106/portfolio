import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  if (request.nextUrl.pathname.startsWith("/api")) {
    requestHeaders.set(
      "x-vercel-protection-bypass",
      process.env.API_VERCEL_AUTOMATION_BYPASS_SECRET || "",
    );

    requestHeaders.set(
      "x-zpanel-protection-bypass",
      process.env.API_ZPANEL_AUTOMATION_BYPASS_SECRET || "",
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
