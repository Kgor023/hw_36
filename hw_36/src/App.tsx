import "./App.css";
import Circle from "./components/circle/circle";
import Headers from "./components/headers/headers";
import OpenSans from "./components/open_sans/open_sans";
import Raleway from "./components/raleway/raleway";
import Img from "./components/icons/icons";
import DarkArea from "./components/dark_area/dark_area";
import Button from "./components/dark_area/button/button";
import Hr from "./components/dark_area/hr/hr";

function App() {
  return (
    <div>
      <Headers name="Typography" />
      <OpenSans />
      <Raleway />
      <Headers name="Colors" />
      <div style={{ display: "flex", gap: "20px" }}>
        <Circle color="black" />
        <Circle color="red" />
        <Circle color="grey" />
        <Circle color="darkgrey" />
        <Circle color="black" />
      </div>

      <Headers name="Icons" />
      <Img />

      <Headers name="Buttons" />
      <DarkArea>
        <Button />
      </DarkArea>
      <Headers name="Styling Elements" />
      <DarkArea>
        <Hr />
      </DarkArea>
    </div>
  );
}

export default App;
