import { PageTransitionAnimation } from "../_components//PageTransitionAnimation";
import { Footer } from "../_components/Footer";

const PagesTemplate = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
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

export default PagesTemplate;
