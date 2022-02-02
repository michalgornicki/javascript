const Arrays = () => {

  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]



    return (
        <div>

        <div className="js-item h5">
        {" "}
        <span className="">Array = </span>
        <span className="text-pink">[{array.join(", ")}]</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Object = </span>
        <span className="text-pink">{`[{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]`}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Object[0].brand = </span>
        <span className="text-pink">{object[0].brand}</span> <br/> (object name [index of element] value name)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.toString() =</span> <span className="text-pink">{array.toString()}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.join(" + ") =</span> <span className="text-pink">{array.join(" + ")}</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.pop(), Array =</span> <span className="text-pink">[1, 5, 9, 13, 17, 21]</span> <br /> (returns shifted element)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.pop() =</span> <span className="text-pink">{25}</span> <br /> (returns shifted element)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.push(28), Array =</span> <span className="text-pink">[1, 5, 9, 13, 17, 21, 25, 28]</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.push(28) =</span> <span className="text-pink"> {8}</span> <br /> (returns new array length)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.shift(), Array =</span> <span className="text-pink"> [5, 9, 13, 17, 21, 25, 28]</span>
      </div> (shift ())
      <div className="js-item h5">
        {" "}
        <span className="">Array.shift() =</span> <span className="text-pink">1</span> <br /> (returns shifted element)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.slice(0, 4) =</span> <span className="text-pink">[{array.slice(0, 4).join(", ")}]</span> <br /> (returns new array from selected range)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.slice(-3, array.length) =</span> <span className="text-pink">[{array.slice(-3, array.length).join(", ")}]</span> <br /> (array of three last elements)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.concat(Array) =</span> <span className="text-pink">[{array.concat(array).join(", ")}]</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">
          Array.filter(item {"=>"} item {">"} 5) =
        </span>{" "}
        <span className="text-pink">[{array.filter((item) => item > 5).join(", ")}]</span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">
          Array.find(item {"=>"} item {">"} 5) =
        </span>
        <span className="text-pink"> {array.find((item) => item > 5)} </span> <br /> (returns first element fulfilling the condition)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">
          Array.findIndex(item {"=>"} item {">"} 5) =
        </span>
        <span className="text-pink"> {array.findIndex((item) => item > 5)} </span> <br /> (returns index of first element fulfilling the condition)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.from("ABCDEFGHIJKL") =</span>
        <span className="text-pink"> [{Array.from("ABCDEFGHIJKL").join(", ")}] </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.includes(13) =</span>
        <span className="text-pink"> {"true"} </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.indexOf(17) =</span>
        <span className="text-pink"> {array.indexOf(17)} </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.lastIndexOf(17) =</span>
        <span className="text-pink"> {array.lastIndexOf(17)} </span> <br /> (returns last index of element, if there are more iterations)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">Array.length =</span>
        <span className="text-pink"> {array.length} </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.map(item => <span>num {item} </span>)"} =</span>
        <span className="text-pink">
          {" "}
          {array.map((item) => (
            <span>n: {item} </span>
          ))}{" "}
        </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.reduce((total, value) => total + value)"} =</span>
        <span className="text-pink"> {array.reduce((total, num) => total + num)} </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.reverse()"} =</span>
        <span className="text-pink"> [{array.reverse().join(", ")}] </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.sort((a,b) => a - b)"} =</span>
        <span className="text-pink"> [{array.sort((a, b) => a - b).join(", ")}] </span>
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.some((item) => item > 5)"} =</span>
        <span className="text-pink"> true </span> <br /> (check if any value fulfill condition)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.splice(0, 3)"} =</span>
        <span className="text-pink"> [{"1, 5, 9"}] </span> <br /> (gets position and number of items to remove from array, overwrites original array without removed items, returns removed items)
      </div>
      <div className="js-item h5">
        {" "}
        <span className="">{"array.splice(array.length, 0, 45, 89)"} =</span>
        <span className="text-pink"> [{"1, 5, 9, 13, 17, 21, 25, 45, 89"}] </span> <br /> (add new array items to end of array)
      </div>


      </div>
    )
}

export default Arrays;