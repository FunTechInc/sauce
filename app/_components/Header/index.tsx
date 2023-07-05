import Link from "next/link";
import s from "./header.module.scss";
import { Menu } from "./components/Menu";

export const Header = () => {
   return (
      <header className={s.wrapper}>
         <h1>
            <Link className={s.link} href={"/"}>
               (hidden)sauce
            </Link>
         </h1>
         <Menu />
         <nav>
            <li>
               <Link className={s.link} href={"/sample"}>
                  sample
               </Link>
            </li>
         </nav>
      </header>
   );
};
