import { SampleLayout } from "@/app/_layout/SampleLayout";
import { ScrollTriggerSample } from "./_conponents/ScrollTrigger";
import { DataFetch } from "./_conponents/DataFetch";

import type { Metadata } from "next";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = () => {
   return (
      <SampleLayout>
         <ScrollTriggerSample />
         <DataFetch />
      </SampleLayout>
   );
};

export { metadata };
export default Sample;
