import { AppHooks } from "./app-hooks";
import { MainLayout } from "@/app/_layout/MainLayout";
import { poppins, noto } from "./font";
import "the-new-css-reset/css/reset.css";
import "@funtech-inc/spice/css";
import "@/css/global.scss";

import type { Metadata } from "next";
import { SITEURL, SITENAME, SITEDESCRIPTION } from "./_libs/constants";

const metadata: Metadata = {
   title: {
      default: SITENAME,
      template: `%s | ${SITENAME}`,
   },
   description: SITEDESCRIPTION,
   twitter: {
      card: "summary_large_image",
      title: SITENAME,
      creator: "@funtech_inc",
      siteId: "@funtech_inc",
   },
   metadataBase: SITEURL,
   alternates: {
      canonical: "/",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja" className={`${poppins.variable} ${noto.variable}`}>
         <body style={{ opacity: 0 }} className={noto.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
