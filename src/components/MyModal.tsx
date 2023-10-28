import React from "react";
import ReactModal from "react-modal";

interface isOpen {
  isOpen: boolean;
}

const MyModal = ({ isOpen }: isOpen) => {
  return <ReactModal isOpen={isOpen}>모달입니다.</ReactModal>;
};

export default MyModal;
