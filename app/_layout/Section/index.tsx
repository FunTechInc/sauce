import { forwardRef } from "react";
import s from "./section.module.scss";

type TSection = {
   children: React.ReactNode;
   padding: "L" | "M" | "S";
   bgColor?: "white" | "black";
   className?: string;
   id?: string;
};

/**
 * @param padding "L:16rem" | "M:12rem" | "S:10.4rem";
 * @param bgColor "white" | "black";
 */
export const Section = forwardRef<HTMLDivElement, TSection>(
   ({ padding, bgColor, children, className, id }: TSection, ref) => {
      return (
         <section
            ref={ref}
            id={id ? id : ""}
            className={`${s["padding_" + padding]} ${
               bgColor ? s["bg_" + bgColor] : ""
            } ${className ? className : ""}`}>
            {children}
         </section>
      );
   }
);

Section.displayName = "Section";
