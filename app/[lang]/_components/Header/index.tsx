import { Hamburger } from "./Hamburger";
import { HeaderWrapper } from "./HeaderWrapper";
import { Inner } from "@/app/[lang]/_layout/Inner";
import LocaleSwitcher from "../elements/LocaleSwitcher";
import { LocaleLink } from "@/components/LocaleLink";
import { ImageLoader } from "@/components/Loader";
import s from "./header.module.scss";
import { NavLink } from "./NavLink";
import { Locale } from "@/i18n-config";

export const Header = ({ lang }: { lang: Locale }) => {
   return (
      <HeaderWrapper>
         <Inner width="outer" className={s.inner}>
            <h1 className={s.logo}>
               <NavLink href={"/"}>
                  <ImageLoader
                     src={"/app.jpg"}
                     width={1800}
                     height={594}
                     alt="sauce"
                  />
               </NavLink>
            </h1>
            <Hamburger lang={lang}>
               <div className={s.menuWrapper}>
                  <LocaleLink href={"/sample"}>sample</LocaleLink>
               </div>
            </Hamburger>
            <nav>
               <li>
                  <NavLink className={s.link} href={"/sample"}>
                     sample
                  </NavLink>
               </li>
            </nav>
            <LocaleSwitcher />
         </Inner>
      </HeaderWrapper>
   );
};
