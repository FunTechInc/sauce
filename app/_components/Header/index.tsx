import Link from "next/link";
import { Menu } from "./components/Menu";
import { HeaderWrapper } from "./components/HeaderWrapper";
import { Inner } from "@/app/_layout/Inner";
import s from "./header.module.scss";

export const Header = () => {
   return (
      <HeaderWrapper>
         <Inner width="wide" className={s.inner}>
            <h1>
               <Link className={s.link} href={"/"} scroll={false}>
                  (hidden)sauce
               </Link>
            </h1>
            <Menu />
            <nav>
               <li>
                  <Link className={s.link} href={"/sample"} scroll={false}>
                     sample
                  </Link>
               </li>
            </nav>
         </Inner>
      </HeaderWrapper>
   );
};
