import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useGsapRegister = () => {
   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(useGSAP);
};
