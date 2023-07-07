import Link from "next/link";
import { getAllBlogs, getNotionDatabase } from "@/app/_libs/api-responses";
import { SampleLayout } from "@/app/_layout/SampleLayout";
import s from "./style.module.scss";

import type { Metadata } from "next";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = async () => {
   const blogs = await getAllBlogs();
   const notion = await getNotionDatabase();
   return (
      <SampleLayout>
         <div className={s.wrapper}>
            <div className={s.block}>
               <h3>Sample:microCMS</h3>
               <p>
                  ダイナミックルーティングでページ遷移アニメーションを有効にする例。MekuriContextに送った、routingをレンダリングする。page.tsxから記事のparamsを受け取れないため、全記事データをサーバーコンポーネントでfetchして、そのjsonをクライアントサイドに受け渡しする。記事数が多いとメモリを消費する。その場合は、下のようにページ遷移を無効にして、ページ毎にdata
                  fetchする方が良い。
                  <br />
                  page.tsxでmetadata,generateMetadataは使える
               </p>
               <ul>
                  {blogs.contents?.map((blog) => (
                     <li key={blog.id}>
                        <Link href={`/sample/${blog.id}`}>{blog.title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={s.block}>
               <h3>Blog:microCMS</h3>
               <p>
                  ページ遷移アニメーションを無効にする例。普通にpage.tsxがレンダリングされ、記事のparamsを受け取れる。サーバーコンポーネントで記事情報を取得するため、記事数が膨大な場合は無効にするのをおすすめ。
               </p>
               <ul>
                  {blogs.contents?.map((blog) => (
                     <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={s.block}>
               <h3>Notion</h3>
               <ul>
                  {notion.map((blog) => (
                     <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
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
