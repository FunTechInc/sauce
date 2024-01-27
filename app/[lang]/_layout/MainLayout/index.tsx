import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { PageTransition } from "../PageTransition";
import { Locale } from "@/i18n-config";

export const MainLayout = async ({
   children,
   lang,
}: {
   children: React.ReactNode;
   lang: Locale;
}) => {
   return (
      <MainWrapper>
         <PageTransition.Context>
            <Header lang={lang} />
            <main>
               <PageTransition.Animation>
                  <PageTransition.Layout>{children}</PageTransition.Layout>
               </PageTransition.Animation>
            </main>
            <Footer />
         </PageTransition.Context>
      </MainWrapper>
   );
};
