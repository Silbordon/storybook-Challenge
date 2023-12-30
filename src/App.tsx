import { BrowserRouter } from "react-router-dom";
import Button from "./components/atoms/Button/Button";
import React, { useState } from "react";
import ModalLogin from "./components/organisms/ModalLogin/ModalLogin";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("app", isOpen);
  
 
  return (
    <BrowserRouter>
      <div>
        <div>
      <Button onClick={() => setIsOpen(true)} text={"Open"} />
      <ModalLogin isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
