import { forwardRef } from "react";
import s from "./inner.module.scss";
import classnames from "classnames";

type InnerProps = {
   /** "wide:1128rem" | "narrow:960rem" | "outer:1360rem" */
   width: "wide" | "narrow" | "outer";
} & React.HTMLAttributes<HTMLDivElement>;

export const Inner = forwardRef<HTMLDivElement, InnerProps>(
   ({ children, className, width, ...rest }, ref) => {
      return (
         <div
            ref={ref}
            className={classnames(s.inner, s["w_" + width], className)}
            {...rest}>
            {children}
         </div>
      );
   }
);

Inner.displayName = "Inner";
