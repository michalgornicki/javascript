import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Arrays from "./components/arrays.jsx"
import Variables from "./components/variables.jsx"
import Numbers from "./components/numbers.jsx"


function App() {
  const object = [{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]

  console.log(array);

  return (
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>
     
      <Routes>
          <Route path="/" element={<Arrays />} />
          <Route path="/Variables" element={<Variables />} />
          <Route path="/Numbers" element={<Numbers />} />
        </Routes>


    </div>
  );
}

export default App;
