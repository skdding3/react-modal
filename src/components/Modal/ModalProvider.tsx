import React, { useState, useMemo } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalContext";

const ModalProvider = ({ children }: any) => {
  // STATE
  const [openedModal, setOpendModal] = useState([]);

  // DISPATCH

  const open = (Component: any, props: any) => {
    setOpendModal((modals) => {
      return [...modals, { Component, props }];
    });
  };
  const close = (Component: any) => {
    setOpendModal((modals) => {
      return modals.filter((modal) => {
        return modal.Component == !Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

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
