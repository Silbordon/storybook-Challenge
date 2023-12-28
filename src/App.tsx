import { BrowserRouter } from "react-router-dom";
import Card from "./components/atoms/Card/Card";
import CardMediaSimple from "./components/organisms/CardMediaSimple/CardMediaSimple";

function App() {
  const img = "/assets/icons/Bitmap.svg";
  return (
    <BrowserRouter>
      <div>
      <CardMediaSimple imageUrl={img}/>
        <br />
        <CardMediaSimple />
      </div>
    </BrowserRouter>
  );
}

export default App;
