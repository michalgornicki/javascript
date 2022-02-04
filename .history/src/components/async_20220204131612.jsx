const Async = () => {
  const functionOne = () => {
    console.log("aaa");
  };
  const functionTwo = (callback) => {
    console.log("bbb");
    callback();
  };
  functionTwo(functionOne);

  const promise = new Promise((resolve, reject) => {
    const x = "pegasus";
    const y = "unicorn";
    const z = document.getElementsByClassName(document.getElementsByClassName("text-pink")[0])
    setTimeout(() => {
      if (z) {
        resolve();
      } else {
        reject();
      }
    }, 0);
  });

  promise
    .then((result) => {
      console.log("Yes, it is true!");
    })
    .catch((error) => {
      console.log("Sorry, it is false.");
    });

  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">Callback: </span> <br />
        <span className="text-pink">{`const functionOne = () => {code}`}</span> <br />
        <span className="text-pink">{`const functionTwo = (callback) => {code; callback();}`}</span> <br />
        <span className="text-pink">{`functionTwo(functionOne)`}</span> <br /> (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Promise: </span> <br />
        <span className="text-pink">{`const promise = new Promise((resolve, reject) => {`}</span> <br />
        <span className="text-pink">{`const x = "pegasus";`}</span> <br />
        <span className="text-pink">{`const y = "unicorn";`}</span> <br />
        <span className="text-pink">{` if(x === y) {resolve();}`}</span> <br />
        <span className="text-pink">{` else {reject();}})`}</span> <br />
        <span className="text-pink">{`promise`}</span> <br />
        <span className="text-pink">{`.then(result => {console.log('Yes, it is true!')})`}</span> <br />
        <span className="text-pink">{`.catch(error => {console.log('Sorry, it is false.')})`}</span> <br />
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Async/Await: </span> <br />
      </div>
    </div>
  );
};

export default Async;
