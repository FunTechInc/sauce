import { SpiceStarter } from "@funtech-inc/spice";
import { GlobalStyle } from "./GlobalStyle";
import { FontLoaded } from "./FontLoaded";
import { GSAP } from "./GSAP";
import { PageTransitionRoute } from "./PageTransitionRoute";

export const AppSetup = () => {
   return (
      <>
         <GlobalStyle />
         <SpiceStarter areYouFun />
         <FontLoaded />
         <GSAP />
         <PageTransitionRoute />
      </>
   );
};
