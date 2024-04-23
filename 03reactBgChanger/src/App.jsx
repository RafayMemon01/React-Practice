import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("blue");

  return <div className="mainDiv" style={{backgroundColor: color}}>
    <div>

    <button onClick={()=>setColor("black")}>black</button>
    <button onClick={()=>setColor("blue")}>blue</button>
    <button onClick={()=>setColor("white")}>white</button>
    <button onClick={()=>setColor("orange")}>orange</button>
    <button onClick={()=>setColor("yellow")}>yellow</button>
    <button onClick={()=>setColor("green")}>green</button>
    </div>
  </div>;
};

export default App;
