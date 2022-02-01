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
        <span className="">{"clearTimeout()"} -</span>
        <span className="text-pink"> Prevent MyTimeout from executing </span> <br />
      </div>




    </div>
  );
};

export default Window;
