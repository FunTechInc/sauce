import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      domains: ["images.microcms-assets.io"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "images.microcms-assets.io",
         },
      ],
   },
};

export default nextConfig;
