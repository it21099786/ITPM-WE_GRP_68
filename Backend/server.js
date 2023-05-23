//eclare the dependecies to variable

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//RUN WITHIN OUR device server
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo db connection is success!");
});

//http://localhost:8070/restaurant

/*const restaurantRouter=require("./routes/restaurants.js");
app.use("/restaurant", restaurantRouter);*/

const carRouter = require("./routes/cars.js");
app.use("/car", carRouter);


//run the backen using following portnum

app.listen(PORT, () => {
  console.log(`Server is up and down on port : ${PORT}`);
})
