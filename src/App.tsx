import { BrowserRouter } from "react-router-dom";
import LinkButton from "./components/atoms/LinkButton/LinkButton";
import IconFavorite from "./components/atoms/IconFavorite/IconFavorite";
import Card from "./components/atoms/Card/Card";
import HeaderCard from "./components/molecules/HeaderCard/HeaderCard";

function App() {
  const img = "/assets/icons/Bitmap.svg";
  return (
    <BrowserRouter>
      <div>
        <LinkButton to={"*"} text={"ACTION 1"} />
        <IconFavorite isFilled={true} />
        <Card imageUrl={img} />
        <br />
        <Card />
        <br />
        <HeaderCard />
      </div>
    </BrowserRouter>
  );
}

export default App;
