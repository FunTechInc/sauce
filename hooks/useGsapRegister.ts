import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ISDEV } from "@/app/[lang]/_libs/constants";

export const useGsapRegister = () => {
   gsap.registerPlugin(ScrollTrigger);
   ScrollTrigger.defaults({
      markers: ISDEV,
   });
   gsap.registerPlugin(useGSAP);
};
