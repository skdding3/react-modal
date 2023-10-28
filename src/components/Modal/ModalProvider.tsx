import React, { useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalContext";

const ModalProvider = ({ children }: any) => {
  // STATE
  const [openedModal, setOpendModal] = useState([]);

  // DISPATCH

  const open = () => {};
  const close = () => {};

  const dispatch = { open, close };

  // Modal
  return (
    <ModalsStateContext.Provider value={openedModal}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalProvider;
