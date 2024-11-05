import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { Locale } from "@/i18n-config";

export const MainLayout = async ({
   children,
   lang,
}: {
   children: React.ReactNode;
   lang: Locale;
}) => {
   return (
      <div
         style={{
            flexDirection: "column",
            display: "flex",
            minHeight: "100svh",
         }}>
         <Header lang={lang} />
         <main style={{ flex: 1 }}>{children}</main>
         <Footer />
      </div>
   );
};
