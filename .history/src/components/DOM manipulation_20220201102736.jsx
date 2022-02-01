const DOM = () => {
  return (
    <div className="">
      <div className="js-item h5">
        {" "}
        <span className="">{`element.parentNode`} -</span>
        <span className="text-pink"> Select parent of selected element.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.childNodes`} -</span>
        <span className="text-pink"> Select child of selected element.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.firstChild`} -</span>
        <span className="text-pink"> Select first child.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.firstChild`} -</span>
        <span className="text-pink"> Select first child.</span> <br />
      </div>
    </div>
  );
};

export default DOM;
