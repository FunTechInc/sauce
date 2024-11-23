import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { InfinityLoopOnView } from "@funtech-inc/spice";
import { SampleLayout } from "../../_layout/SampleLayout";
import { ScrollTo } from "@/components/ScrollTo";

const HomeContent = async ({ lang }: { lang: Locale }) => {
   const dictionary = await getDictionary(lang);

   return (
      <SampleLayout>
         <ScrollTo target={"#target"}>scroll down</ScrollTo>
         <InfinityLoopOnView speed={-1} style={{ width: "100%" }}>
            <p style={{ fontSize: "24vw" }}>{dictionary.title}</p>
         </InfinityLoopOnView>
         <div id="target"></div>
      </SampleLayout>
   );
};

export default HomeContent;
