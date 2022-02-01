const Arrays = () => {

  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]



    return (
        <div>

        <div className="js-item h4">
        {" "}
        <span className="">Array = </span>
        <span className="text-pink">[{array.join(", ")}]</span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Object = </span>
        <span className="text-pink">{`[{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]`}</span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Object[0].brand = </span>
        <span className="text-pink">{object[0].brand}</span> <br/> (object name [index of element] value name)
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Array.toString() =</span> <span className="text-pink">{array.toString()}</span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">Array.join(" + ") =</span> <span className="text-pink">{array.join(" + ")}</span>



      </div>
    )
}

export default Arrays;