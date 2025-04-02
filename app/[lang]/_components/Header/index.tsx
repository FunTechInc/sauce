import { Hamburger } from "./Hamburger";
import { HeaderWrapper } from "./HeaderWrapper";
import LocaleSwitcher from "../elements/LocaleSwitcher";
import { ImageLoader } from "@/components/Loader";
import { NavLink } from "./NavLink";
import { Locale } from "@/i18n-config";
import Logo from "@/public/app.jpg";
import s from "./header.module.scss";
import Link from "next/link";

export const Header = ({ lang }: { lang: Locale }) => {
   return (
      <>
         <HeaderWrapper>
            <div className={s.inner}>
               <h1 className={s.logo}>
                  <NavLink href={"/"}>
                     <ImageLoader
                        src={Logo}
                        width={1800}
                        placeholder="blur"
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
                     <Link href={"/test"}>test</Link>
                  </li>
               </nav>
               <LocaleSwitcher />
            </div>
         </HeaderWrapper>
         <Hamburger lang={lang} />
      </>
   );
};
