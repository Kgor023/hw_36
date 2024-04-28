import "./components/Titles/main.css";
import Headers from "./components/Headers/headers";
import Title from "./components/Titles/titles";
import Raleway from "./components/raleway";
import Circle from "./components/circle/circle";
function App() {
  return (
    <div className="main">
      <Headers title={"Typography"} />
      <Title />
      <Raleway />
      <div style={{ display: "flex", gap: "10px" }}>
        <Circle color={"red"} />
        <Circle color={"black"} />
        <Circle color={"blue"} />
      </div>

      <Headers title={"Colors"} />
      <Headers title={"Items"} />
      <Headers title={"Buttons"} />
    </div>
  );
}

export default App;
