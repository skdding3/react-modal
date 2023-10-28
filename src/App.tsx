import MyModal from "./components/MyModal";
import { useState } from "react";

const App = () => {
  // STATE
  const [isOpen, setOpen] = useState(Boolean);

  // EVENT
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>모달 열기</button>
      <MyModal isOpen={isOpen} />
    </div>
  );
};

export default App;
