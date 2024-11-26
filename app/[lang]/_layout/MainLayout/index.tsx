import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { Locale } from "@/i18n-config";
import { PageTransitionAnimation } from "../PageTransitionAnimation";

export const MainLayout = async ({
   children,
   lang,
}: {
   children: React.ReactNode;
   lang: Locale;
}) => {
   return (
      <div>
         <Header lang={lang} />
         <PageTransitionAnimation>
            <div
               style={{
                  flexDirection: "column",
                  display: "flex",
                  minHeight: "100svh",
               }}>
               <main style={{ flex: 1 }}>{children}</main>
               <Footer />
            </div>
         </PageTransitionAnimation>
      </div>
   );
};
