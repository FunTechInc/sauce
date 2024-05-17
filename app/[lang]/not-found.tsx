import type { Metadata } from "next";
import NotFound from "./(pages)/_notFound";

const metadata: Metadata = {
   title: "Sorry , This page doesn’t exist",
};

const Page = () => {
   return <NotFound />;
};

export default Page;
export { metadata };
