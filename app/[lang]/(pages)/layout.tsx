import { Locale } from "@/i18n-config";
import { Header } from "../_components/Header";
import { PageTransitionAnimation } from "../_components/PageTransitionAnimation";
import { Footer } from "../_components/Footer";

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
         <PageTransitionAnimation>
            <div
               style={{
                  flexDirection: "column",
                  display: "flex",
                  minHeight: "100svh",
               }}>
               <main style={{ flex: 1 }}>{children}</main>
               <Footer />
            </div>
         </PageTransitionAnimation>
      </>
   );
};

export default PagesLayout;
