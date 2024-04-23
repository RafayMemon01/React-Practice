import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-600"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-10 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Red</button>
          <button onClick={() => setColor("green")} style={{backgroundColor: "green"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Green</button>
          <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Blue</button>
          <button onClick={() => setColor("olive")} style={{backgroundColor: "olive"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Olive</button>
          <button onClick={() => setColor("purple")} style={{backgroundColor: "purple"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Purple</button>
          <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Yellow</button>
          <button onClick={() => setColor("orange")} style={{backgroundColor: "orange"}} className="p-3 rounded-xl shadow-lg text-white cursor-pointer">Orange</button>
        </div>
      </div>
    </div>
  );
};

export default App;
