import MyModal from "./components/MyModal";
import useModals from "./components/Modal/useModal";
import { useState } from "react";

const App = () => {
  // STATE
  const [isOpen, setOpen] = useState(Boolean);

  // MODAL
  const { openModal } = useModals();

  // EVENT
  const handleClick = () => {
    openModal(MyModal, { foo: "bar" });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>모달 열기</button>
      <MyModal isOpen={isOpen} />
    </div>
  );
};

export default App;
