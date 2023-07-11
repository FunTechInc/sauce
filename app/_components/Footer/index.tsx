import s from "./footer.module.scss";

export const Footer = () => {
   return (
      <footer className={s.wrapper}>
         <a href="https://github.com/FunTechInc/spice" target="_blank">
            (hidden)spice
         </a>
         <a href="https://github.com/FunTechInc/mekuri" target="_blank">
            (hidden)mekuri
         </a>
      </footer>
   );
};
