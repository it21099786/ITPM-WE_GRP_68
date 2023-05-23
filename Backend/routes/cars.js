const router = require("express").Router();
let Car = require("../models/Car");

router.route("/add").post((req, res) => {
  const carID = req.body.carID;
  const carModel = req.body.carModel;
  const numOfSeats = req.body.numOfSeats;
  const distance = req.body.distance;
  const carType = req.body.carType;




  const newCar= new Car({
    carID,
    carModel,
    numOfSeats,
    distance,
    carType,
    
  });

  newCar
    .save()
    .then(() => {
      res.json("successful details");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/view").get((req, res) => {
  Car.find()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:ID").put(async (req, res) => {
  let carId = req.body.ID;
  const { carName } = req.body;
  const { quantity } = req.body;
  const { price } = req.body;
 

  const Update = {
    carName,
    quantity,
    price,
    
  };

  const update = await Car.findByIdAndUpdate(carId, Update)
    .then(() => {
      res.status(200).send({ status: "Car updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating Car", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  const id = req.params.id;

  await Car.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).send({ status: "Car deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting Car", error: err.message });
    });
});

module.exports = router;
