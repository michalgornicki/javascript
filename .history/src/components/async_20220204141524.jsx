const Async = () => {

  return (
    <div className="">
      <div className="js-item">
        {" "}
        <span className="">Callback: </span> <br />
        <span className="text-pink">{`const functionOne = () => {code}`}</span> <br />
        <span className="text-pink">{`const functionTwo = (callback) => {code; callback();}`}</span> <br />
        <span className="text-pink">{`functionTwo(functionOne)`}</span> <br /> (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item">
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
      <div className="js-item">
        {" "}
        <span className="">Promise.all: </span> <br />
        <span className="text-pink">{`Promise.all([`}</span> <br />
        <span className="text-pink">{`loadComments()`}</span> <br />
        <span className="text-pink">{`loadLikes()`}</span> <br />
        <span className="text-pink">{`loadArticles()`}</span> <br />
        <span className="text-pink">{`])`}</span> <br />
        <span className="text-pink">{`.then(res => {`}</span> <br />
        <span className="text-pink">{`console.log(res); //[comments, likes, articles]`}</span> <br />
        <span className="text-pink">{`});`}</span> <br />
        (This method takes array of promises as input. It returns single promise (array of results) that resolves when all of the passed promises have resolved or when the iterable contains no promises. )
      </div>
      <div className="js-item">
        {" "}
        <span className="">Promise.allSettled: </span> <br />

        (This method is similar to Promise.all, but it returns result also when one or more passed promise returned error.)
      </div>
      <div className="js-item">
        {" "}
        <span className="">Promise.race: </span> <br />
        <span className="text-pink">{`Promise.race([`}</span> <br />
        <span className="text-pink">{`loadComments()`}</span> <br />
        <span className="text-pink">{`loadLikes()`}</span> <br />
        <span className="text-pink">{`loadArticles()`}</span> <br />
        <span className="text-pink">{`])`}</span> <br />
        <span className="text-pink">{`.then(res => {`}</span> <br />
        <span className="text-pink">{`console.log(res); //[comments or likes or articles, whichever promise executed first]`}</span> <br />
        <span className="text-pink">{`});`}</span> <br />
        (This promise method returns only one of passed promises, which executed first regardless success or error. 
      </div>
      <div className="js-item">
        {" "}
        <span className="">Promise.finally: </span> <br />

        (When promise is .)
      </div>
    </div>
  );
};

export default Async;
