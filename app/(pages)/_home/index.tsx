import { SampleLayout } from "@/app/_layout/SampleLayout";
import { Magnet } from "./_components/Magnet";
import { Modal } from "./_components/Modal";
import { ScrollTriggerSample } from "./_components/ScrollTrigger";

const HomeContent = () => {
   return (
      <SampleLayout>
         <ScrollTriggerSample />
         <Magnet title="(hidden)sauce" />
         <Modal />
      </SampleLayout>
   );
};

export default HomeContent;
