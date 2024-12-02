import { Locale } from "@/i18n-config";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";

const PagesLayout = async ({
   children,
   params,
}: {
   children: React.ReactNode;
   params: Promise<{ lang: Locale }>;
}) => {
   const { lang } = await params;

   return (
      <>
         <Header lang={lang} />
         <div
            style={{
               flexDirection: "column",
               display: "flex",
               minHeight: "100svh",
            }}>
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
         </div>
      </>
   );
};

export default PagesLayout;
