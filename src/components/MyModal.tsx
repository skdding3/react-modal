import React from "react";
import ReactModal from "react-modal";

interface modalInterface {
  isOpen: boolean;
  onSubmit: any;
  onCancel: any;
}

const MyModal = ({ isOpen, onSubmit, onCancel }: modalInterface) => {
  // EVENT

  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };
  return (
    <ReactModal isOpen={isOpen}>
      <div>모달입니다</div>
      <div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};

export default MyModal;
