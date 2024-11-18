import { Archive } from "../../../../_components/Archive";

const Page = async ({
   params: { page, category },
}: {
   params: { page: number; category: string };
}) => {
   return <Archive page={page} category={category} />;
};

export default Page;
