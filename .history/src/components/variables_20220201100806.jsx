const Variables = () => {
  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">keyword var - </span>
        <span className="text-pink"> global scope, function scope, can be reassigned </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">keyword let - </span>
        <span className="text-pink"> function scope, block scope, can be reassigned </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">keyword const - </span>
        <span className="text-pink"> function scope, block scope, cannot be reassigned </span> <br />
      </div>

      <div className="js-item h5">
        {" "}
        <span className="">{const executeFunction = () =>} - </span>
        <span className="text-pink"> function scope, block scope, cannot be reassigned </span> <br />
      </div>
    </div>
    
  );
};

export default Variables;
