import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Arrays from "./components/arrays.jsx"
import Variables from "./components/variables.jsx"
import Numbers from "./components/numbers.jsx"
import Loops from "./components/loops.jsx"
import Loops from "./components/loops.jsx"
import Loops from "./components/loops.jsx"

function App() {

  return (
    <Router>
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>

      <div className="h3 d-flex w-50 m-auto my-5 justify-content-evenly">

      <Link className="link-style mx-3" to="/">Arrays and objects</Link>
      <Link className="link-style mx-3" to="/Numbers">Numbers</Link>
      <Link className="link-style mx-3" to="/Variables">Variables</Link>
      <Link className="link-style mx-3" to="/Loops">Loops</Link>


      </div>
     
      <Routes>
          <Route path="/" element={<Arrays />} />
          <Route path="/Numbers" element={<Numbers />} />
          <Route path="/Variables" element={<Variables />} />
          <Route path="/Loops" element={<Loops />} />
        </Routes>


    </div>
    </Router>
  );
}

export default App;
