"use client";

import { Modal as MyModal } from "@funtech-inc/spice";
import { useAppStore } from "@/app/_context/useAppStore";
import s from "../home.module.scss";

const ModalContent = () => {
   return (
      <div className={`${s.modal_content} js_modal_content`} data-lenis-prevent>
         <p>this is modal content</p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor
            nostrum ea accusantium magni quisquam esse minima provident ut odio
            delectus iste, tenetur nobis corrupti laborum mollitia vitae vero
            ipsam.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor
            nostrum ea accusantium magni quisquam esse minima provident ut odio
            delectus iste, tenetur nobis corrupti laborum mollitia vitae vero
            ipsam.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor
            nostrum ea accusantium magni quisquam esse minima provident ut odio
            delectus iste, tenetur nobis corrupti laborum mollitia vitae vero
            ipsam.
         </p>
         <button className={`${s.close} spice__modal_close`}>close</button>
      </div>
   );
};

export const Modal = () => {
   return (
      <MyModal
         className={s.button}
         dialog={{
            children: <ModalContent></ModalContent>,
            className: s.dialog,
         }}
         callback={{
            onOpen: (dialog) => {
               useAppStore.setState({ isModalOpen: true });
               const content =
                  dialog.getElementsByClassName("js_modal_content")[0];
               content.scrollTop = 0;
            },
            onClose: () => {
               useAppStore.setState({ isModalOpen: false });
            },
         }}>
         <span>Show Modal</span>
      </MyModal>
   );
};
