const Numbers = () => {
  return (
    <div className="">
      <div className="js-item h4">
        {" "}
        <span className="">Math.round(10.67) = </span>
        <span className="text-pink">{Math.round(10.67)}</span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Math.ceil(10.67) = </span>
        <span className="text-pink">{Math.ceil(10.67)}</span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Math.floor(10.67) = </span>
        <span className="text-pink">{Math.floor(10.67)}</span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Math.pow(10.67) = </span>
        <span className="text-pink">{Math.trunc(10.67)}</span>
      </div>
    </div>
  );
};

export default Numbers;
