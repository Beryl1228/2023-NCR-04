require("dotenv").config(); // Load ENV Variables
const mongoose = require("mongoose");


const MONGO_URI = process.env.MONGO_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(MONGO_URI, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;