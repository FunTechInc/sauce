//component
import { AppHooks } from "./app-hooks";
import { MainLayout } from "@/app/_layout/MainLayout";

//font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//css
import "the-new-css-reset/css/reset.css";
import "@funtech-inc/spice/css";
import "@/css/global.scss";

//meta
import type { Metadata } from "next";
const metadata: Metadata = {
   title: {
      default: "(hidden)sauce | FunTech",
      template: "%s | FunTech",
   },
   description:
      "This is 'Hiden no Tare' a clever Japanese pun, both in sound and sense.",
   twitter: {
      card: "summary_large_image",
      title: "(hidden)sauce | FunTech",
      creator: "@funtech_inc",
      siteId: "@funtech_inc",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <body className={inter.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
