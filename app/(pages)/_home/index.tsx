import { SampleLayout } from "@/app/_layout/SampleLayout";
import { Magnet } from "./_components/Magnet";
import { Modal } from "./_components/Modal";

const HomeContent = () => {
   return (
      <SampleLayout>
         <Magnet title="(hidden)sauce" />
         <Modal />
      </SampleLayout>
   );
};

export default HomeContent;
