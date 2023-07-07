import { SampleLayout } from "@/app/_layout/SampleLayout";
import { getBlogById } from "@/app/_libs/api-responses";
import type { Metadata } from "next";

const metadata: Metadata = {
   title: "blog",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

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

const Single = async ({ params }: { params: { id: string } }) => {
   const blog = await getBlogById(params.id);
   return (
      <SampleLayout>
         <p>{blog.title}</p>
      </SampleLayout>
   );
};

export default Single;
