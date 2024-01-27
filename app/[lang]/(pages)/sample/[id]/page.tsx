import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { getAllBlogs, getBlogById } from "@/app/[lang]/_libs/api-responses";
import type { Metadata } from "next";

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

const Single = async ({ params }: { params: { id: string } }) => {
   const blog = await getBlogById(params.id);
   return (
      <SampleLayout>
         <p>sample</p>
         <p>{blog.title}</p>
      </SampleLayout>
   );
};

export default Single;
