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
        <span className="">{"setInterval(() => function(), 500"} -</span>
        <span className="text-pink"> {setInterval(() => [document.getElementsByClassName("text-pink")[1].innerHTML += "hello", 500)}</span> <br />
      </div>




    </div>
  );
};

export default Window;
