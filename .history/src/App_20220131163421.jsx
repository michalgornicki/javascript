import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";


function App() {
  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]

  console.log(array);

  return (
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>
     
      <Routes>
          <Route path="/" element={<Arrays />} />
          <Route path="/Database" element={<Variables />} />
          <Route path="/Create" element={<Create />} />
        </Routes>


    </div>
  );
}

export default App;
