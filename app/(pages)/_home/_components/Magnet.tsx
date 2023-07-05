"use client";

import { Magnet as MyMagnet } from "@funtech-inc/spice";
import { gsap } from "gsap";
import s from "../home.module.scss";

export const Magnet = ({ title }: { title: string }) => {
   return (
      <MyMagnet
         className={s.magnet}
         callback={{
            move: (props) => {
               const animProps = { duration: 0.6, ease: "power2.out" };
               let xTo = gsap.quickTo(props.target, "x", animProps),
                  yTo = gsap.quickTo(props.target, "y", animProps);
               xTo(props.x * 0.4);
               yTo(props.y * 0.4);
            },
            leave: ({ target }) => {
               gsap.to(target, {
                  x: 0,
                  y: 0,
                  duration: 0.6,
                  ease: "back.out(4)",
                  overwrite: true,
               });
            },
         }}>
         <h1>{title}</h1>
      </MyMagnet>
   );
};
