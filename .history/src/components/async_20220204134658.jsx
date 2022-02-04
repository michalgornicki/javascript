const Async = () => {

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
        <span className="text-pink">{` else {reject();}})`}</span> <br /> <br />
        <span className="text-pink">{`promise`}</span> <br />
        <span className="text-pink">{`.then(result => {console.log('Yes, it is true!')})`}</span> <br />
        <span className="text-pink">{`.catch(error => {console.log('Sorry, it is false.')})`}</span> <br />
        (Promise is producing code, when finished it gives success (resolve) or error (reject). Next there is possibility to execute code when promise returned result with "then" and when promise returned error with "catch".)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Promise.all: </span> <br />
        <span className="text-pink">{`Promise.all([`}</span> <br />
        <span className="text-pink">{`loadComments()`}</span> <br />
        <span className="text-pink">{`loadLikes()`}</span> <br />
        <span className="text-pink">{`loadArticles()`}</span> <br />
      </div>
    </div>
  );
};

export default Async;
