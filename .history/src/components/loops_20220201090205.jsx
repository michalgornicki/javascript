const Loops = () => {
  return (
    <div className="">
        <div className="js-item h5">
        {" "}
        <span className="">{`Loop for`} -</span>
        <span className="text-pink"> {`for (let i = 0; i < array.length; i++)`} <br /> {`{text += array[i] + "<br>";}`}</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`Loop for in`} -</span>
        <span className="text-pink"> {`for (let x in object)`} <br /> {`{ text += object[x];}`}</span> <br />  (add new array items to end of array)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`Loop for of`} -</span>
        <span className="text-pink"> {`for (let x of array)`} <br /> {`{ text += x;}`}</span> <br />  (loops through the values of aiterable object.)
       
      </div>
    </div>
  );
};

export default Loops;
