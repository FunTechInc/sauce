import { Hamburger } from "./components/Hamburger";
import { HeaderWrapper } from "./components/HeaderWrapper";
import { Inner } from "@/app/[lang]/_layout/Inner";
import LocaleSwitcher from "../elements/LocaleSwitcher";
import { LocaleLink } from "@/components/LocaleLink";
import { ImageLoader } from "@/components/Loader";
import s from "./header.module.scss";

export const Header = () => {
   return (
      <HeaderWrapper>
         <Inner width="outer" className={s.inner}>
            <h1 className={s.logo}>
               <LocaleLink href={"/"}>
                  <ImageLoader
                     src={"/app.jpg"}
                     width={1800}
                     height={594}
                     alt="sauce"
                  />
               </LocaleLink>
            </h1>
            <Hamburger>
               <div className={s.menuWrapper}>
                  <LocaleLink href={"/sample"}>sample</LocaleLink>
               </div>
            </Hamburger>
            <nav>
               <li>
                  <LocaleLink
                     className={s.link}
                     href={"/sample"}
                     scroll={false}>
                     sample
                  </LocaleLink>
               </li>
            </nav>
            <LocaleSwitcher />
         </Inner>
      </HeaderWrapper>
   );
};
