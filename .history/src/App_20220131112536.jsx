import React from 'react';
import './App.css';

function App() {

  const array = [1, 5, 9, 13, 17, 21, 25]

  console.log(array)

  return (
    <div>
      <div>{array.map((item => item +))}</div>
    </div>
  );
}

export default App;
