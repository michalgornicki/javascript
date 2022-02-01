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
        <span className="text-pink"> {mysetInterval(() => {console.log(new Date())}, 2000)}</span> <br />
      </div>




    </div>
  );
};

export default Window;
