const Numbers = () => {
  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">Math.round(10.67) = </span>
        <span className="text-pink">{Math.round(10.67)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.ceil(10.67) = </span>
        <span className="text-pink">{Math.ceil(10.67)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.floor(10.67) = </span>
        <span className="text-pink">{Math.floor(10.67)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.pow(3, 5) = </span>
        <span className="text-pink">{Math.pow(3, 5)}</span> <br/> (number x to power of y)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.random() = </span>
        <span className="text-pink">{Math.random()}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.sqrt(9) = </span>
        <span className="text-pink">{Math.sqrt(9)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.abs(-9.34) = </span>
        <span className="text-pink">{Math.abs(-9.34)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.min(0, 150, 30, 20, -8, -200) = </span>
        <span className="text-pink">{Math.min(0, 150, 30, 20, -8, -200)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.max(0, 150, 30, 20, -8, -200) = </span>
        <span className="text-pink">{Math.max(0, 150, 30, 20, -8, -200)}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Math.log2(64) = </span>
        <span className="text-pink">{Math.log2(64)}</span> <br/> (return the base 2 logarithm of x)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">new Date() = </span>
        <span className="text-pink">{new Date()}</span> <br/> (return the base 2 logarithm of x)
      </div>
    </div>
  );
};

export default Numbers;
