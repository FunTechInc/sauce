import { PageTransition } from "../_layout/PageTransition";

const PagesTemplate = async ({ children }: { children: React.ReactNode }) => {
   return <PageTransition>{children}</PageTransition>;
};

export default PagesTemplate;
