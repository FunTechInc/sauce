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
         <PageTransition.Context>
            <Lenis>
               <Header />
               <main>
                  <PageTransition.Animation>
                     <PageTransition.Layout>{children}</PageTransition.Layout>
                  </PageTransition.Animation>
               </main>
               <Footer />
            </Lenis>
         </PageTransition.Context>
      </MainWrapper>
   );
};
