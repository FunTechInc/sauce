import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "images.microcms-assets.io",
         },
      ],
   },
   turbopack: {
      root: ".",
   },
};

export default nextConfig;
