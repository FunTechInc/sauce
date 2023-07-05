import { Lenis } from "@/app/_layout/Lenis";
import { WrapperLayout } from "./WrapperLayout";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import {
   PageTransitionContext,
   PageTransitionAnimation,
   PageTransitionLayout,
} from "../PageTransition";

/*===============================================
import pages
===============================================*/
import Home from "@/app/page";
import Sample from "@/app/(pages)/sample/page";
const componentArr = [
   {
      path: "/",
      component: <Home />,
   },
   {
      path: "/sample",
      component: <Sample />,
   },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperLayout>
         <Lenis>
            <PageTransitionContext millisecond={600}>
               <Header />
               <main>
                  <PageTransitionAnimation>
                     <PageTransitionLayout componentArr={componentArr}>
                        {children}
                     </PageTransitionLayout>
                  </PageTransitionAnimation>
               </main>
               <Footer />
            </PageTransitionContext>
         </Lenis>
      </WrapperLayout>
   );
};
