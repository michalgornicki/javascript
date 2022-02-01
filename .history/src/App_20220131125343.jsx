import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const array = [1, 5, 9, 13, 17, 21, 25]

  console.log(array)

  return (
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript repeat course</div>
      <div className="js-item h4 py-2"> <span className="">Array = </span><span className="text-pink">[{array.join( ", " )}]</span></div>
      <div className="js-item h4 py-2"> <span className="">Array.toString() =</span> <span className="text-pink">{array.toString()}</span></div>
      <div className="js-item h4 py-2"> <span className="">Array.join(" + ") =</span> <span className="text-pink">{array.join( " + " )}</span></div>
      <div className="js-item h4 py-2"> <span className="">Array.pop() =</span> <span className="text-pink">{array.pop()}</span></div>
      <div className="js-item h4 py-2"> <span className="">Array.push(28), Array =</span> <span className="text-pink">[1, 5, 9, 13, 17, 21, 25, 28]</span></div>
      <div className="js-item h4 py-2"> <span className="">Array.push(28) =</span> <span className="text-pink"></span> {array.push(28)} (returned new array length)</div>
      <div className="js-item h4 py-2"> <span className="">Array.shift(), Array =</span> [5, 9, 13, 17, 21, 25, 28]</div>
      <div className="js-item h4 py-2"> <span className="">Array.shift() =</span> 1 (returned shifted element)</div>
      <div className="js-item h4 py-2"> <span className="">Array.slice(0, 4) =</span> [{array.slice(0, 4).join( ", " )}] (returned new array from selected range)</div>
      <div className="js-item h4 py-2"> <span className="">Array.slice(-3, array.length) =</span> [{array.slice(-3, array.length).join( ", " )}] (array of three last elements)</div>
      <div className="js-item h4 py-2"> <span className="">Array.concat(Array) =</span> [{array.concat(array).join( ", " )}]</div>
      <div className="js-item h4 py-2"> <span className="">Array.filter(item {"=>"} item {">"} 5) =</span> [{array.filter(item => item > 5).join( ", " )}]</div>
      <div className="js-item h4 py-2"> <span className="">Array.find(item {"=>"} item {">"} 5) =</span> {array.find(item => item > 5)} (returned first element fulfilling the condition)</div>



    </div>
  );
}

export default App;
