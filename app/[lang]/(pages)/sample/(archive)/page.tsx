import type { Metadata } from "next";
import { Archive } from "./_components/Archive";

const metadata: Metadata = {
   title: "NEWS",
};

const Page = async () => {
   return <Archive />;
};

export { metadata };
export default Page;
