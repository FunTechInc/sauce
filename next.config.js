/** @type {import('next').NextConfig} */
const nextConfig = {
   // You can Static Exports
   // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
   // output: "export",
   images: {
      domains: ["images.microcms-assets.io"],
   },
};

module.exports = nextConfig;
