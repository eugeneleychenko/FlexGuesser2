import "./styles.css";
import CalculateSuccess from "./Calc";
import logo from "./3.png";
// import ChecklistApp from "./check.js";

export default function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="Logo"
        style={{ maxWidth: "500px", width: "100%", marginBottom: "35px" }}
      />
      <CalculateSuccess />
    </div>
  );
}
