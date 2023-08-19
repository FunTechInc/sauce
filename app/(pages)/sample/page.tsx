import Link from "next/link";
import { getAllBlogs } from "@/app/_libs/api-responses";
import { SampleLayout } from "@/app/_layout/SampleLayout";
import { ScrollToId } from "@/app/_utils/ScrollToId";
import s from "./style.module.scss";

import type { Metadata } from "next";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = async () => {
   const blogs = await getAllBlogs();

   return (
      <SampleLayout>
         <div className={s.wrapper}>
            <div className={s.block}>
               <ScrollToId target="#scroll-target">ScrollToId</ScrollToId>
            </div>
            <div className={s.block} id="scroll-target">
               <h3>Sample:microCMS</h3>
               <ul>
                  {blogs.map((blog) => (
                     <li key={blog.id}>
                        <Link href={`/sample/${blog.id}`}>{blog.title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </SampleLayout>
   );
};

export { metadata };
export default Sample;
