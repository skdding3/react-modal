import { useContext } from "react";
import { ModalsDispatchContext } from "./ModalContext";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component: any, props: any) => {
    open(Component, props);
  };
  const closeModal = (Component: any, props: any) => {
    close(Component, props);
  };

  return {
    openModal,
    closeModal,
  };
}
