import { Hamburger } from "./Hamburger";
import { HeaderWrapper } from "./HeaderWrapper";
import LocaleSwitcher from "../elements/LocaleSwitcher";
import { ImageLoader } from "@/components/Loader";
import { NavLink } from "./NavLink";
import { Locale } from "@/i18n-config";
import s from "./header.module.scss";

export const Header = ({ lang }: { lang: Locale }) => {
   return (
      <>
         <HeaderWrapper>
            <div className={s.inner}>
               <h1 className={s.logo}>
                  <NavLink href={"/"}>
                     <ImageLoader
                        src={"/app.jpg"}
                        width={1800}
                        height={594}
                        alt="sauce"
                        priority
                     />
                  </NavLink>
               </h1>
               <nav>
                  <li>
                     <NavLink className={s.link} href={"/sample"}>
                        sample
                     </NavLink>
                  </li>
               </nav>
               <LocaleSwitcher />
            </div>
         </HeaderWrapper>
         <Hamburger lang={lang} />
      </>
   );
};
