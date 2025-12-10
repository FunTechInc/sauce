import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { stableSvh, assertLocale } from "../_libs/constants";

const PagesLayout = async ({
   children,
   params,
}: {
   children: React.ReactNode;
   params: Promise<{ lang: string }>;
}) => {
   const { lang } = await params;
   const locale = assertLocale(lang);

   return (
      <>
         <Header lang={locale} />
         <div
            style={{
               flexDirection: "column",
               display: "flex",
               minHeight: stableSvh(100),
            }}>
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
         </div>
      </>
   );
};

export default PagesLayout;
