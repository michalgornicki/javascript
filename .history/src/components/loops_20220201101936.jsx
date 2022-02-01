const Loops = () => {
  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">{`Loop for`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`for (let i = 0; i < array.length; i++)`} <br /> {`{text += array[i] + "<br>";}`}
        </span>{" "}
        <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`Loop for in`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`for (let x in object)`} <br /> {`{ text += object[x];}`}
        </span>{" "}
        <br /> (loops through the properties of an object)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`Loop for of`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`for (let x of array)`} <br /> {`{ text += x;}`}
        </span>{" "}
        <br /> (loops through the values of an iterable object.)
      </div>
      <div className="js-item h5">
        {" "}
        <br />
        <span className="">{`Loop while`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`while (i < 10)`} <br /> {`{text += "The number is " + i;`} <br /> {`i++;}`}
        </span>{" "}
        <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`Loop do while`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`do`} <br /> {`{text += "The number is " + i;`} <br /> {`i++;}`} {`while (i < 10)`};
        </span>{" "}
        <br /> (This loop will execute the code block once, before checking if the condition is true.)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`Switch`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`switch(expression) {`} <br />
          {`case x:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`case y:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`case z:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`default:`} <br /> {`{code}`} <br />
        </span>{" "}
        <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`if else`} -</span>
        <span className="text-pink">
          {" "}
          <br />
          {`switch(expression) {`} <br />
          {`case x:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`case y:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`case z:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`default:`} <br /> {`{code}`} <br />
        </span>{" "}
        <br />
      </div>
    </div>
  );
};

export default Loops;
