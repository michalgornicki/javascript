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
        <span className="">Promise: </span> <br />
        <span className="text-pink">{`const promise = new Promise((resolve, reject) => {`}</span> <br />
        <span className="text-pink">{`const x = "pegasus";`}</span> <br />
        <span className="text-pink">{`const y = "unicorn";`}</span> <br />
        <span className="text-pink">{` if(x === y) {resolve();}`}</span> <br /> 
        <span className="text-pink">{` else {reject();}})`}</span> <br /> 
        <span className="text-pink">{`promise`}</span> <br />
        <span className="text-pink">{`then(function () {console.log('Success, You are a GEEK');})`}</span> <br />
        <span className="text-pink">{`.catch(function () {console.log('Some error has occurred');});`}</span> <br /> 
      </div>
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
