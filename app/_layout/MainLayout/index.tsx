import { Lenis } from "@/app/_layout/Lenis";
import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import {
   PageTransitionContext,
   PageTransitionAnimation,
   PageTransitionLayout,
} from "../PageTransition";

/*===============================================
import routing
===============================================*/
import Home from "@/app/page";
import Sample from "@/app/(pages)/sample/page";
import Single from "@/app/(pages)/sample/[id]/page";
const routing = [
   {
      path: "/",
      children: <Home />,
   },
   {
      path: "/sample",
      children: <Sample />,
   },
   {
      path: "/sample/★",
      children: <Single />,
   },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <MainWrapper>
         <Lenis>
            <PageTransitionContext millisecond={600} routing={routing}>
               <Header />
               <main>
                  <PageTransitionAnimation>
                     <PageTransitionLayout>{children}</PageTransitionLayout>
                  </PageTransitionAnimation>
               </main>
               <Footer />
            </PageTransitionContext>
         </Lenis>
      </MainWrapper>
   );
};
