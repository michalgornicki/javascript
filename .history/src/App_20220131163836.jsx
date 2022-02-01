import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Arrays from "./components/arrays.jsx"
import Variables from "./components/variables.jsx"
import Numbers from "./components/numbers.jsx"
import { Link } from "react-router-dom";



function App() {

  return (
    <Router>
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>

      <Link to="/">strona główna</Link>
      <Link to="/Database">baza danych</Link>
      <Link to="/Create">stwórz nowe ogłoszenie</Link>
     
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
