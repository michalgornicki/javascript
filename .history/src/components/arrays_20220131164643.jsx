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



      </div>
    )
}

export default Arrays;