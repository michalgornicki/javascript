const Async = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Callback: </div> <br />
        <div className="text-pink">{`const functionOne = () => {code}`}</div> <br />
        <div className="text-pink">{`const functionTwo = (callback) => {code; callback();}`}</div> <br />
        <div className="text-pink">{`functionTwo(functionOne)`}</div> <br /> (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise: </div> <br />
        <div className="text-pink">
          {`const promise = new Promise((resolve, reject) => {`} <br />
          {`const x = "pegasus";`} <br />
          {`const y = "unicorn";`} <br />
          
          {` if(x === y) {resolve();}`} <br />
          {` else {reject();}})`} <br /> <br />
          {`promise`} <br />
          {`.then(result => {console.log('Yes, it is true!')})`} <br />
          {`.catch(error => {console.log('Sorry, it is false.')})`}{" "}
        </div>{" "}
        <br />
        (Promise is producing code, when finished it gives success (resolve) or error (reject). Next there is possibility to execute code when promise returned result with "then" and when promise returned error with "catch".)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.all: </div> <br />
        <div className="text-pink">{`Promise.all([`}</div> <br />
        <div className="text-pink">{`loadComments()`}</div> <br />
        <div className="text-pink">{`loadLikes()`}</div> <br />
        <div className="text-pink">{`loadArticles()`}</div> <br />
        <div className="text-pink">{`])`}</div> <br />
        <div className="text-pink">{`.then(res => {`}</div> <br />
        <div className="text-pink">{`console.log(res); //[comments, likes, articles]`}</div> <br />
        <div className="text-pink">{`});`}</div> <br />
        (This method takes array of promises as input. It returns single promise (array of results) that resolves when all of the passed promises have resolved or when the iterable contains no promises. )
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.allSettled: </div> <br />
        (This method is similar to Promise.all, but it returns result also when one or more passed promise returned error.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.race: </div> <br />
        <div className="text-pink">{`Promise.race([`}</div> <br />
        <div className="text-pink">{`loadComments()`}</div> <br />
        <div className="text-pink">{`loadLikes()`}</div> <br />
        <div className="text-pink">{`loadArticles()`}</div> <br />
        <div className="text-pink">{`])`}</div> <br />
        <div className="text-pink">{`.then(res => {`}</div> <br />
        <div className="text-pink">{`console.log(res); //[comments or likes or articles, whichever promise executed first]`}</div> <br />
        <div className="text-pink">{`});`}</div> <br />
        (This promise method returns only one of passed promises, which executed first regardless success or error.
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.finally: </div> <br />
        (When promise is either fulfilled or rejected callback finally is executed. This provides a way to run code despite result of promise.)
      </div>
    </div>
  );
};

export default Async;
