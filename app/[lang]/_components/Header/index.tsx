import { Menu } from "./components/Menu";
import { HeaderWrapper } from "./components/HeaderWrapper";
import { Inner } from "@/app/[lang]/_layout/Inner";
import LocaleSwitcher from "../_elements/LocaleSwitcher";
import { LocaleLink } from "../_elements/LocaleLink";
import { ImageLoader } from "../../_utils/Loader";
import s from "./header.module.scss";

export const Header = () => {
   return (
      <HeaderWrapper>
         <Inner width="wide" className={s.inner}>
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
            <Menu />
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
