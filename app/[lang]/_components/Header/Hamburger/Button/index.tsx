import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import { Locale } from "@/i18n-config";
import s from "./index.module.scss";

const LabelText = {
   open: {
      ja: "メニューを開く",
      en: "Open menu",
   },
   close: {
      ja: "メニューを閉じる",
      en: "Close menu",
   },
};

export const Button = ({ lang }: { lang: Locale }) => {
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   const setIsMenuOpen = useAppStore(({ setIsMenuOpen }) => setIsMenuOpen);
   return (
      <div className={s.buttonContainer}>
         <button
            onClick={() => {
               setIsMenuOpen(!isMenuOpen);
            }}
            className={s.button}
            aria-label={
               isMenuOpen ? LabelText.close[lang] : LabelText.open[lang]
            }
            aria-haspopup={!isMenuOpen}
            aria-expanded={isMenuOpen}>
            <span></span>
            <span></span>
         </button>
      </div>
   );
};
