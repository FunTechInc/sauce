import { forwardRef } from "react";
import s from "./section.module.scss";

type SectionProps = {
   children: React.ReactNode;
   /** "L:16rem" | "M:12rem" | "S:10.4rem" */
   padding: "L" | "M" | "S";
   /** "white" | "black" */
   bgColor?: "white" | "black";
   className?: string;
   id?: string;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
   ({ padding, bgColor, children, className, id }: SectionProps, ref) => {
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
