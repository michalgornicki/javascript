import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const array = [1, 5, 9, 13, 17, 21, 25]

  console.log(array)

  return (
    <div className="text-center">
      <div className="display-1 mt-1 mb-5">Javascript exercises</div>
      <div className="h4">Array = [{array.map((item => item + " "))}]</div>
      <div className="h4"> Array.toString( ) = {array.toString()}</div>
      <div className="h4"> Array.join(" + ") = {array.join( " + " )}</div>
      <div className="h4"> Array.pop() = {array.pop()}</div>
      <div className="h4"> Array.push(28) ""=>"" Array = [1, 5, 9, 13, 17, 21, 25, 28]</div>
    </div>
  );
}

export default App;
