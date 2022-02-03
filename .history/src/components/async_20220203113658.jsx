const Async = () => {
  
  const functionOne = () => {
    code;
  };
  const functionTwo = (callback) => {
    code;
    callback();
  };
  functionTwo(functionOne);

  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">Callback: </span> <br />
        <span className="text-pink">{`const functionOne = () => {code}`}</span> <br />
        <span className="text-pink">{`const functionTwo = (callback) => {code; callback();}`}</span> <br />
        <span className="text-pink">{`functionTwo(functionOne)`}</span> <br />
      </div>
    </div>
  );
};

export default Async;
