const Loops = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">{`Loop for`}: </div>
        <div className="text-pink">
          {" "}
          
          {`for (let i = 0; i < array.length; i++)`}  {`{text += array[i] + "<br>";}`}
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Loop for in`}: </div>
        <div className="text-pink">
          {" "}
          
          {`for (let x in object)`}  {`{ text += object[x];}`}
        </div>{" "}
         (loops through the properties of an object)
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Loop for of`}: </div>
        <div className="text-pink">
          {" "}
          
          {`for (let x of array)`}  {`{ text += x;}`}
        </div>{" "}
         (loops through the values of an iterable object.)
      </div>
      <div className="js-item">
        {" "}
        
        <div className="">{`Loop while`}: </div>
        <div className="text-pink">
          {" "}
          
          {`while (i < 10)`}  {`{text += "The number is " + i;`}  {`i++;}`}
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Loop do while`}: </div>
        <div className="text-pink">
          {" "}
          
          {`do`}  {`{text += "The number is " + i;`}  {`i++;}`} {`while (i < 10)`};
        </div>{" "}
         (This loop will execute the code block once, before checking if the condition is true.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Switch`}: </div>
        <div className="text-pink">
          {" "}
          
          {`switch(expression) {`} 
          {`case x:`}  {`{code}`}  {`break;`} 
          
          {`case y:`}  {`{code}`}  {`break;`} 
          
          {`case z:`}  {`{code}`}  {`break;`} 
          
          {`default:`}  {`{code}`} 
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`if else`}: </div>
        <div className="text-pink">
          {" "}
          
          {`if(condition) {`} 
          {`(code)`} 
          
          {`else if(condition) {`} 
          {`(code)`} 
          
          {`else {`} 
          {`(code)`} 
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`ternary expression if else`}: </div>
        <div className="text-pink">
          {" "}
          
          {`condition ? code1 : code2`}  
        </div>(if condition is fulfilled execute code1, if else execute code2)
        
      </div>
    </div>
  );
};

export default Loops;
