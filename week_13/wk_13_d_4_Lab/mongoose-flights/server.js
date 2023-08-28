require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const Flight = require('./models/Flight.js')
const Destination = require('./models/Destination.js');
const path = require("path"); // built in node module we use to resolve paths more on this when we use it



const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')



// Middleware
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

//routes
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
  });
  
  
  app.use('/flights', require('./controllers/flights'))
  
  

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));