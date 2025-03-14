import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/media/:path*",
      destination: `${process.env.MEDIA_URL}/:path*`,
    },
  ],
};

export default nextConfig;
