import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { AutoScrollContainer } from "@funtech-inc/spice";
import Image from "next/image";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";

const HomeContent = async ({ lang }: { lang: Locale }) => {
   const dictionary = await getDictionary(lang);
   // const blur = await generateBlurDataURL("./public/app.jpg");

   return (
      <SampleLayout>
         <AutoScrollContainer speed={-1}>
            <p style={{ fontSize: "24vw" }}>{dictionary.title}</p>
         </AutoScrollContainer>
         {/* <div
            style={{
               width: "200px",
               height: "200px",
               position: "relative",
               margin: "auto",
            }}>
            <Image
               src={blur}
               alt="image"
               placeholder="blur"
               blurDataURL={blur}
               fill
               style={{ objectFit: "cover" }}
            />
         </div> */}
      </SampleLayout>
   );
};

export default HomeContent;
