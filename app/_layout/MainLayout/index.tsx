import { Lenis } from "@/app/_layout/Lenis";
import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { PageTransition } from "../PageTransition";

export const MainLayout = async ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <MainWrapper>
         <Lenis>
            <PageTransition.Context>
               <Header />
               <main>
                  <PageTransition.Animation>
                     <PageTransition.Layout>{children}</PageTransition.Layout>
                  </PageTransition.Animation>
               </main>
               <Footer />
            </PageTransition.Context>
         </Lenis>
      </MainWrapper>
   );
};
