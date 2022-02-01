const Arrays = () => {

  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]



    return (
        <div>


      <div className="js-item h4">
        {" "}
        <span className="">{"array.splice(array.length, 0, 45, 89)"} =</span>
        <span className="text-pink"> [{"1, 5, 9, 13, 17, 21, 25, 45, 89"}] </span> <br /> (add new array items to end of array)
      </div>


      </div>
    )
}

export default Arrays;