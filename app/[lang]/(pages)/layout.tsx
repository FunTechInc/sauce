import { Locale } from "@/i18n-config";
import { Header } from "../_components/Header";

const PagesLayout = ({
   children,
   params: { lang },
}: {
   children: React.ReactNode;
   params: { lang: Locale };
}) => {
   return (
      <>
         <Header lang={lang} />
         {children}
      </>
   );
};

export default PagesLayout;
