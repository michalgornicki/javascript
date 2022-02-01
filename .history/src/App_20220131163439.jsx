import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"
import Database from "./components/Database.jsx"
import Create from "./components/Create.jsx"


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
          <Route path="/Create" element={<Numbers />} />
        </Routes>


    </div>
  );
}

export default App;
