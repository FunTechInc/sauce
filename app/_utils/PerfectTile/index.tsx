import s from "./index.module.scss";

/*===============================================
wrapper
===============================================*/
type TWrapper = {
   children: React.ReactNode;
   tag?: "ul" | "ol";
   col?: 2 | 3 | 4 | 5;
   marginBottom?: 16;
   gap?: 16;
   className?: string;
};
const Wrapper = ({
   children,
   tag = "ul",
   col = 2,
   marginBottom = 16,
   gap = 16,
   className,
}: TWrapper) => {
   const Tag = tag;
   const classNames = `${s["col_" + col]} ${s.wrapper} ${
      className ? className : ""
   } ${s["marginBottom_" + marginBottom]} ${s["gap_" + gap]}`;
   return <Tag className={classNames}>{children}</Tag>;
};

/*===============================================
list
===============================================*/
type TList = {
   children: React.ReactNode;
   className?: string;
};
const List = ({ children, className }: TList) => {
   return (
      <li className={`${s.list} ${className ? className : ""}`}>{children}</li>
   );
};

/**
 * @param tag ul
 * @param col 2
 * @param marginBottom 16
 * @param gap 16
 */
export const PerfectTile = {
   Wrapper: Wrapper,
   List: List,
};
