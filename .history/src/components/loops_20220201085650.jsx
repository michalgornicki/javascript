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
        <span className="text-pink"> {`for (let i = 0; i < array.length; i++)`} <br /> {`{text += array[i] + "<br>";}`}</span> <br />
      </div>
    </div>
  );
};

export default Loops;
