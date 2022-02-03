const Async = () => {

  const functionOne = () => {
    console.log("aaa");
  };
  const functionTwo = (callback) => {
    console.log("bbb");
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
        <span className="text-pink">{`functionTwo(functionOne)`}</span> <br /> (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
    </div>
  );
};

export default Async;
