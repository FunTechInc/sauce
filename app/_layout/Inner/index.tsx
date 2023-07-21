import s from "./inner.module.scss";

/**
 * @param width "wide:128rem" | "narrow:96rem"
 */
export const Inner = ({
   children,
   className,
   width,
}: {
   children: React.ReactNode;
   className?: string;
   width: "wide" | "narrow";
}) => {
   return (
      <div
         className={`${s.inner} ${s["w_" + width]} ${
            className ? className : ""
         }`}>
         {children}
      </div>
   );
};
