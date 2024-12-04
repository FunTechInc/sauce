import { SpiceStarter } from "@funtech-inc/spice";
import { GlobalStyle } from "./GlobalStyle";
import { FontLoaded } from "./FontLoaded";
import { GSAP } from "./GSAP";
import { ForceScrollToTop } from "./ForceScrollToTop";

export const AppSetup = () => {
   return (
      <>
         <GlobalStyle />
         <SpiceStarter areYouFun />
         <FontLoaded />
         <GSAP />
         <ForceScrollToTop />
      </>
   );
};
