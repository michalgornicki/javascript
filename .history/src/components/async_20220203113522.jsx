const Async = () => {
  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">Callback: </span> <br />
        <span className="text-pink">{`functionOne = () => {code}`}</span> <br />
        <span className="text-pink">{`functionTwo = (callback) => {code`}</span> <br />
        <span className="text-pink">{`callback()}`}</span> <br />
        <span className="text-pink">{`functionTwo(functionOne)`}</span> <br />
      </div>
    </div>
  );
};

export default Async;
