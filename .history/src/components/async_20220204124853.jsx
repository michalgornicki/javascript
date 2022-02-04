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
        <div className="">Callback: </div> <br />
        <div className="text-pink">{`const functionOne = () => {code}`}</div> <br />
        <div className="text-pink">{`const functionTwo = (callback) => {code; callback();}`}</div> <br />
        <div className="text-pink">{`functionTwo(functionOne)`}</div> <br /> (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item h5">
        {" "}
        <div className="">Promise: </div> <br />
        <div className="text-pink">{`const promise = new Promise((resolve, reject) => {`}</div> <br />
        <div className="text-pink">{`const x = "pegasus";`}</div> <br />
        <div className="text-pink">{`const y = "unicorn";`}</div> <br />
        <div className="text-pink">{` if(x === y) {resolve();}`}</div> <br />
        <div className="text-pink">{` else {reject();}})`}</div> <br />
        <div className="text-pink">{`promise`}</div> <br />
        <div className="text-pink">{`.then(() => {console.log('Yes, it is true!');})`}</div> <br />
        <div className="text-pink">{`.catch(() => {console.log('Sorry, it is false.');});`}</div> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <div className="">Async/Await: </div> <br />
        
      </div>
    </div>
  );
};

export default Async;
