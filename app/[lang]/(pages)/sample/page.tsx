import Link from "next/link";
import { getAllBlogs } from "@/app/[lang]/_libs/api-responses";
import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { ScrollToId } from "@/components/ScrollToId";
import s from "./style.module.scss";

import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = async ({ params: { lang } }: { params: { lang: Locale } }) => {
   const dictionary = await getDictionary(lang);
   const blogs = await getAllBlogs();
   return (
      <SampleLayout>
         <div className={s.wrapper}>
            <div className={s.block}>
               <ScrollToId target="#scroll-target">
                  {dictionary.sample}
               </ScrollToId>
            </div>
            <div className={s.block} id="scroll-target">
               <h3>Sample:microCMS</h3>
               <ul>
                  {blogs.map((blog) => (
                     <li key={blog.id}>
                        <Link href={`/sample/${blog.id}`} scroll={false}>
                           {blog.title}
                        </Link>
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
