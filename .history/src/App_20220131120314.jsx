import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const array = [1, 5, 9, 13, 17, 21, 25]

  console.log(array)

  return (
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>
      <div className="h4"> <span className="h2">Array = </span>[{array.map((item => item + " "))}]</div>
      <div className="h4"> <span className="h2">Array.toString( ) =</span> {array.toString()}</div>
      <div className="h4"> <span className="h2">Array.join(" + ") =</span> {array.join( " + " )}</div>
      <div className="h4"> <span className="h2">Array.pop() =</span> {array.pop()}</div>
      <div className="h4"> <span className="h2">Array.push(28), Array =</span> [1, 5, 9, 13, 17, 21, 25, 28]</div>
      <div className="h4"> <span className="h2">Array.push(28) =</span> {array.push(28)} (returned new array length)</div>
      <div className="h4"> <span className="h2">Array.shift(), Array =</span> [5, 9, 13, 17, 21, 25, 28]</div>
      <div className="h4"> <span className="h2">Array.shift() =</span> 1 (returned shifted element)</div>
      <div className="h4"> <span className="h2">Array.slice(0, 4) =</span> {array.slice(0, 4)}</div>


    </div>
  );
}

export default App;
