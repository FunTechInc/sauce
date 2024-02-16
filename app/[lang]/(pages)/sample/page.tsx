import Link from "next/link";
import { getAllBlogs } from "@/app/[lang]/_libs/api-responses";
import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { ScrollToId } from "@/app/[lang]/_utils/ScrollToId";
import s from "./style.module.scss";

import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Suspense } from "react";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const CMSSample = async () => {
   const blogs = await getAllBlogs();
   return (
      <ul>
         {blogs.map((blog) => (
            <li key={blog.id}>
               <Link href={`/sample/${blog.id}`} scroll={false}>
                  {blog.title}
               </Link>
            </li>
         ))}
      </ul>
   );
};

const Sample = async ({ params: { lang } }: { params: { lang: Locale } }) => {
   const dictionary = await getDictionary(lang);
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
               <Suspense fallback={null}>
                  <CMSSample />
               </Suspense>
            </div>
         </div>
      </SampleLayout>
   );
};

export { metadata };
export default Sample;
