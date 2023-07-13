//component
import { AppHooks } from "./app-hooks";
import { MainLayout } from "@/app/_layout/MainLayout";

//font
import { noto } from "./font";

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
   description: "this is our「秘伝のタレ」, means hidden sauce.",
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
         <body style={{ opacity: 0 }} className={noto.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
