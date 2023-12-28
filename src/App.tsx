import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subtitle from "./components/atoms/Subtitle/Subtitle";
import Avatar from "./components/atoms/Avatar/Avatar";
import LinkButton from "./components/atoms/LinkButton/LinkButton";

function App() {
  const OvalImage = "/assets/icons/Oval.svg";
  return (
    <BrowserRouter>
      <div>
        <p>hola</p>
        <Subtitle text="subtitulo" />
        <Avatar imagePath={OvalImage} />
        <LinkButton to={"*"} text={"ACTION 1"} />
      </div>
    </BrowserRouter>
  );
}

export default App;
