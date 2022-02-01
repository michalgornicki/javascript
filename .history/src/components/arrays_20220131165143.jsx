const Arrays = () => {

  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]



    return (
        <div>

       
      <div className="js-item h4">
        {" "}
        <span className="">{"array.reverse()"} =</span>
        <span className="text-pink"> [{array.reverse().join(", ")}] </span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">{"array.sort((a,b) => a - b)"} =</span>
        <span className="text-pink"> [{array.sort((a, b) => a - b).join(", ")}] </span>
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">{"array.some((item) => item > 5)"} =</span>
        <span className="text-pink"> true </span> <br /> (check if any value fulfill condition)
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">{"array.splice(0, 3)"} =</span>
        <span className="text-pink"> [{"1, 5, 9"}] </span> <br /> (gets position and number of items to remove, overwrites original array)
      </div>
      <div className="js-item h4">
        {" "}
        <span className="">{"array.splice(array.length, 0, 45, 89)"} =</span>
        <span className="text-pink"> [{"1, 5, 9, 13, 17, 21, 25, 45, 89"}] </span> <br /> (add new array items to end of array)
      </div>


      </div>
    )
}

export default Arrays;