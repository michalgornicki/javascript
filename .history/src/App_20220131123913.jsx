import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const array = [1, 5, 9, 13, 17, 21, 25]

  console.log(array)

  return (
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>
      <div className="h4 m"> <span className="">Array = </span>[{array.join( ", " )}]</div>
      <div className="h4"> <span className="">Array.toString() =</span> {array.toString()}</div>
      <div className="h4"> <span className="">Array.join(" + ") =</span> {array.join( " + " )}</div>
      <div className="h4"> <span className="">Array.pop() =</span> {array.pop()}</div>
      <div className="h4"> <span className="">Array.push(28), Array =</span> [1, 5, 9, 13, 17, 21, 25, 28]</div>
      <div className="h4"> <span className="">Array.push(28) =</span> {array.push(28)} (returned new array length)</div>
      <div className="h4"> <span className="">Array.shift(), Array =</span> [5, 9, 13, 17, 21, 25, 28]</div>
      <div className="h4"> <span className="">Array.shift() =</span> 1 (returned shifted element)</div>
      <div className="h4"> <span className="">Array.slice(0, 4) =</span> [{array.slice(0, 4).join( ", " )}] (returned new array from selected range)</div>
      <div className="h4"> <span className="">Array.slice(-3, array.length) =</span> [{array.slice(-3, array.length).join( ", " )}] (array of three last elements)</div>
      <div className="h4"> <span className="">Array.concat(Array) =</span> [{array.concat(array).join( ", " )}]</div>
      <div className="h4"> <span className="">Array.filter(item {"=>"} item {">"} 5) =</span> [{array.filter(item => item > 5).join( ", " )}]</div>
      <div className="h4"> <span className="">Array.filter(item {"=>"} item {">"} 5) =</span> {array.find(item => item > 5)}</div>



    </div>
  );
}

export default App;
