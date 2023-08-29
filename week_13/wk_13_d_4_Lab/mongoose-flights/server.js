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

app.get("/flights/seed", (req, res) =>{
  //Array of starter Logs
  const starterFlights = [
        { airline: "American", flightNo: 3404, departs: new Date("2023-09-01T08:00:00Z") },
        { airline: "Southwest", flightNo: 4032, departs: new Date("2023-09-02T12:00:00Z") },
        { airline: "United", flightNo: 5324, departs: new Date("2023-09-03T15:30:00Z") },
    ];
  // Delete all logs
  Flight.deleteMany({})
      .then(data => {
          Flight.create(starterFlights)
              .then( data => {
                console.log("Data inserted successfully");
                res.status(200).json(data); 
              })
              .catch(error => {
                console.error("Error while creating logs:", error);
                res.status(400).json(error);  
              });
      })
      .catch(error => {
          console.error("Error while creating logs:",error);
          res.status(400).json(error);
      });
});




//routes
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
  });
  
  
app.use('/flights', require('./controllers/flights'))
  
  

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));