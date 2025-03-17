import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${process.env.API_URL}/:path*`,
    },
    {
      source: "/media/:path*",
      destination: `${process.env.MEDIA_URL}/:path*`,
    },
  ],
};

export default nextConfig;
