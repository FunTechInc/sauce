import { SampleLayout } from "@/app/_layout/SampleLayout";
import type { Metadata } from "next";
import { Content } from "./Content";
import { getAllBlogs, getBlogById } from "@/app/_libs/api-responses";

export async function generateMetadata({
   params,
}: {
   params: { id: string };
}): Promise<Metadata> {
   const blog = await getBlogById(params.id);
   return {
      title: blog.title,
   };
}

const Single = async () => {
   const blogs = await getAllBlogs();
   return (
      <SampleLayout>
         <Content content={blogs} />
      </SampleLayout>
   );
};

export default Single;
