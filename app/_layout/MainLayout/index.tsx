import { Lenis } from "@/app/_layout/Lenis";
import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { PageTransition } from "../PageTransition";
import { register } from "@funtech-inc/mekuri/register";

/*===============================================
import routing
===============================================*/
import Home from "@/app/page";
import Sample from "@/app/(pages)/sample/page";
import SampleSingle from "@/app/(pages)/sample/[id]/page";
import { getAllBlogsID } from "@/app/_libs/api-responses";

const createRouting = async () => {
   const idArr = await getAllBlogsID();
   const routing = [
      {
         path: "/",
         children: <Home />,
      },
      {
         path: "/sample",
         children: <Sample />,
      },
      ...register({
         path: idArr.map((id) => `/sample/${id}`),
         children: idArr.map((id) => (
            <SampleSingle key={id} params={{ id: id }} />
         )),
      }),
   ];
   return routing;
};

export const MainLayout = async ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <MainWrapper>
         <PageTransition.Context
            millisecond={1000}
            routing={await createRouting()}
            scrollRestoration="restore">
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
