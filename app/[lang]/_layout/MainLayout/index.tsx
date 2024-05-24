import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { SpiceWrapper } from "@funtech-inc/spice";

export const MainLayout = async ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <SpiceWrapper>
         <Header />
         <main>{children}</main>
         <Footer />
      </SpiceWrapper>
   );
};
