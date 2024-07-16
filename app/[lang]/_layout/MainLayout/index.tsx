import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { SpiceWrapper } from "@funtech-inc/spice";
import { Locale } from "@/i18n-config";

export const MainLayout = async ({
   children,
   lang,
}: {
   children: React.ReactNode;
   lang: Locale;
}) => {
   return (
      <SpiceWrapper>
         <Header lang={lang} />
         <main>{children}</main>
         <Footer />
      </SpiceWrapper>
   );
};
