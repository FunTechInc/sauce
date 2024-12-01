import { Locale } from "@/i18n-config";
import { Header } from "../_components/Header";
import { PageTransition } from "../_layout/PageTransition";
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
         <PageTransition>
            <div
               style={{
                  flexDirection: "column",
                  display: "flex",
                  minHeight: "100svh",
               }}>
               <main style={{ flex: 1 }}>{children}</main>
               <Footer />
            </div>
         </PageTransition>
      </>
   );
};

export default PagesLayout;
