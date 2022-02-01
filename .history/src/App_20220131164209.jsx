import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Arrays from "./components/arrays.jsx"
import Variables from "./components/variables.jsx"
import Numbers from "./components/numbers.jsx"

function App() {

  return (
    <Router>
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>

      <div className="d-flex w-50 m-auto justify-content-evenly">

      <Link className="link-nostyle" to="/">Arrays and objects</Link>
      <Link className="link-nostyle" to="/Variables">baza danych</Link>
      <Link className="link-nostyle" to="/Numbers">stwórz nowe ogłoszenie</Link>

      </div>
     
      <Routes>
          <Route path="/" element={<Arrays />} />
          <Route path="/Variables" element={<Variables />} />
          <Route path="/Numbers" element={<Numbers />} />
        </Routes>


    </div>
    </Router>
  );
}

export default App;
