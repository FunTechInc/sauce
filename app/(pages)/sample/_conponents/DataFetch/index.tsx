import s from "./style.module.scss";

export const DataFetch = () => {
   return (
      <div>
         <div className={s.block}>
            <h3>microCMS:</h3>
            <p>somedata</p>
         </div>
         <div className={s.block}>
            <h3>Notion:</h3>
            <p>somedata</p>
         </div>
      </div>
   );
};
