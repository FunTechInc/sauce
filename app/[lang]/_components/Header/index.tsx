import { Hamburger } from "./Hamburger";
import { HeaderWrapper } from "./HeaderWrapper";
import LocaleSwitcher from "../elements/LocaleSwitcher";
import { ImageLoader } from "@/components/Loader";
import { RouteNavLink } from "@/components/RouteNavLink";
import { Locale } from "@/i18n-config";
import Logo from "@/public/app.jpg";
import s from "./header.module.scss";

export const Header = ({ lang }: { lang: Locale }) => {
   return (
      <>
         <HeaderWrapper>
            <div className={s.inner}>
               <h1 className={s.logo}>
                  <RouteNavLink href={"/"}>
                     <ImageLoader
                        src={Logo}
                        width={1800}
                        placeholder="blur"
                        height={594}
                        alt="sauce"
                        priority
                     />
                  </RouteNavLink>
               </h1>
               <nav>
                  <li>
                     <RouteNavLink className={s.link} href={"/sample#test"}>
                        sample
                     </RouteNavLink>
                  </li>
               </nav>
               <LocaleSwitcher />
            </div>
         </HeaderWrapper>
         <Hamburger lang={lang} />
      </>
   );
};
