import { Header } from "@/app/[lang]/_components/Header";
import { Footer } from "@/app/[lang]/_components/Footer";
import { WrapperLayout } from "@funtech-inc/spice";

export const MainLayout = async ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <WrapperLayout>
         <Header />
         <main>{children}</main>
         <Footer />
      </WrapperLayout>
   );
};
