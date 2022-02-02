const DOM = () => {

  document.onloadconsole.log(document.getElementsByClassName("body")[0].childNodes)

  return (
    <div className="body">
      <div className="js-item h5">
        {" "}
        <span className="">{`element.parentNode`}: </span>
        <span className="text-pink"> Select parent of selected element.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.childNodes`}: </span>
        <span className="text-pink"> Select child of selected element.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.firstChild`}: </span>
        <span className="text-pink"> Select first child.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.lastChild`}: </span>
        <span className="text-pink"> Select last child.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.nextSibling`}: </span>
        <span className="text-pink"> Select next sibling of selected node.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.previousSibling`}: </span>
        <span className="text-pink"> Select previous sibling of selected node.</span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`event.target`}: </span>
        <span className="text-pink"> Placed in function returns HTML element that triggered event. For example: "{`<span className="text-pink"> Returns HTML element that triggered event. </span>`}" </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`event.preventDefault()`}: </span>
        <span className="text-pink"> Prevents default action that belongs to the event. </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.classList`}: </span>
        <span className="text-pink"> Returns classes of selected element. </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.classList.add("class-name")`}: </span>
        <span className="text-pink"> Add class to selected element. </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.classList.remove("class-name")`}: </span>
        <span className="text-pink"> Remove class from selected element. </span> <br />
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{`element.classList.toggle("class-name")`}: </span>
        <span className="text-pink"> Toggle on/off class of selected element. </span> <br />
      </div>
    </div>
    
  );
};

export default DOM;
