const DOM = () => {

  const Hover = (event) => {
    console.log(event.target)
  }

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
        <span className="">{`element.lastChild`} -</span>
        <span className="text-pink"> Select last child.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.nextSibling`} -</span>
        <span className="text-pink"> Select next sibling of selected node.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.previousSibling`} -</span>
        <span className="text-pink"> Select previous sibling of selected node.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`event.target`} -</span>
        <span className="text-pink" onMouseOver={Hover}> {event.target}</span> <br />
      </div>
    </div>
    
  );
};

export default DOM;
