import Link from "next/link";
import s from "./header.module.scss";
import { Menu } from "./components/Menu";

export const Header = () => {
   return (
      <header className={s.wrapper}>
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
      </header>
   );
};
