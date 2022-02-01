import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const array = [1, 5, 9, 13, 17, 21, 25]

  console.log(array)

  return (
    <div>
      <div className="h4 w-50">Array = [{array.map((item => item + " "))}]</div>
    </div>
  );
}

export default App;
