const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  carModel: {
    type: String,
    required: true,
  },

  carID: {
    type: String,
  },

  numOfSeats: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },

  carType: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
