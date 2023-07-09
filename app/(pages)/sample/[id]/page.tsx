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

export async function generateStaticParams() {
   const blogs = await getAllBlogs();

   return blogs.map((blog) => ({
      id: blog.id,
   }));
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
