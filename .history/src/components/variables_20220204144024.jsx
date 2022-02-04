const Variables = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">keyword var:  </div>
        <div className="text-pink"> global scope, function scope, can be reassigned </div> <br />
      </div>
      <div className="js-item">
        {" "}
        <div className="">keyword let:  </div>
        <div className="text-pink"> function scope, block scope, can be reassigned </div> <br />
      </div>
      <div className="js-item">
        {" "}
        <div className="">keyword const:  </div>
        <div className="text-pink"> function scope, block scope, cannot be reassigned </div> <br />
      </div>

      <div className="js-item">
        {" "}
        <div className="">{"const executeFunction = () =>"}:  </div>
        <div className="text-pink"> {`{function}`} </div> <br /> (variable const representing some function)
      </div>
    </div>
    
  );
};

export default Variables;
