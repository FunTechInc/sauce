import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { PageTransition } from "../PageTransition";

export const MainLayout = async ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <MainWrapper>
         {/* <PageTransition.Context>
            <Header />
            <main>
               <PageTransition.Animation>
                  <PageTransition.Layout>{children}</PageTransition.Layout>
               </PageTransition.Animation>
            </main>
            <Footer />
         </PageTransition.Context> */}
         <Header />
         <main>{children}</main>
         <Footer />
      </MainWrapper>
   );
};
