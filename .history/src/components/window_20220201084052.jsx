const Window = () => {
  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">{"Window"} -</span>
        <span className="text-pink"> This object represents an open window in a browser.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"setInterval(() => function(), 500)"} -</span>
        <span className="text-pink"> Repeat function() every 500 miliseconds </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"clearInterval(myInterval)"} -</span>
        <span className="text-pink"> Clear myInterval from executing </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"setTimeout(() => function(), 500)"} -</span>
        <span className="text-pink"> Execute function() after 500 miliseconds </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"clearTimeout(MyTimeout)"} -</span>
        <span className="text-pink"> Prevent MyTimeout from executing </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"alert(message)"} -</span>
        <span className="text-pink"> Display alert box with your message </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"confirm(do you accept conditions?)"} -</span>
        <span className="text-pink"> Display confirm box with choice </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"prompt(Enter your first name)"} -</span>
        <span className="text-pink"> Display prompt box to enter value </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window.open()"} -</span>
        <span className="text-pink"> Open new window </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window(close)"} -</span>
        <span className="text-pink"> Close current window </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window.innerWidth"} -</span>
        <span className="text-pink"> Inner width of browser window </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window.innerHeight"} -</span>
        <span className="text-pink"> Inner height of browser window </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window.scrollX"} -</span>
        <span className="text-pink"> Pixels a document has scrolled from the left of the window.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window.scrollY"} -</span>
        <span className="text-pink"> Pixels a document has scrolled from the top of the window. </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"window.location.origin"} -</span>
        <span className="text-pink"> Information about the current URL.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"history.back()"} -</span>
        <span className="text-pink"> Loads the previous URL in the history list.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"navigator.appName"} -</span>
        <span className="text-pink"> Get user browser name.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"navigator.language"} -</span>
        <span className="text-pink"> Get user browser language.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"Document"} -</span>
        <span className="text-pink"> When HTML document is loades into a web browser it becomes document object. It is root node of the HTML document.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"getElementById()"} -</span>
        <span className="text-pink"> Returns the element that has the ID attribute with the specified value.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"getElementsByClassName()	"} -</span>
        <span className="text-pink"> Returns the element that has the ID attribute with the specified value.</span> <br />
      </div>

    </div>
  );
};

export default Window;
