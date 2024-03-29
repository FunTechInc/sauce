import Link from "next/link";
import { Menu } from "./components/Menu";
import { HeaderWrapper } from "./components/HeaderWrapper";
import { Inner } from "@/app/[lang]/_layout/Inner";
import LocaleSwitcher from "../LocaleSwitcher";
import { Locale } from "@/i18n-config";
import s from "./header.module.scss";

export const Header = ({ lang }: { lang: Locale }) => {
   return (
      <HeaderWrapper>
         <Inner width="wide" className={s.inner}>
            <h1>
               <Link className={s.link} href={`/${lang}/`} scroll={false}>
                  (hidden)sauce
               </Link>
            </h1>
            <Menu />
            <nav>
               <li>
                  <Link
                     className={s.link}
                     href={`/${lang}/sample`}
                     scroll={false}>
                     sample
                  </Link>
               </li>
            </nav>
            <LocaleSwitcher />
         </Inner>
      </HeaderWrapper>
   );
};
