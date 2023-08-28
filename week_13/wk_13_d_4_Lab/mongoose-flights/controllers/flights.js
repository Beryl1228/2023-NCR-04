// Import Dependencies
const express = require("express");
const Flight = require("../models/Flight");
const Destination = require('../models/Destination'); // Import the Destination model

// const newFlight = new Flight();
// // Obtain the default date
// const dt = newFlight.departs;
// // Format the date for the value attribute of the input
// const departsDate = dt.toISOString().slice(0, 16);
// res.render('flights/new', {departsDate});

const router = express.Router();

//INDUCES

// Index route
router.get('/', (req, res) => {
    console.log("asdasd")
      Flight.find({})
        .then(foundflights => {
          res.render('flights/Index', {
            flights: foundflights          
        });
        })
        .catch(error => res.status(400).json({ error }))
    })


//New
router.get('/new', (req, res) => {
    res.render('flights/New');
    
  });

//Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Flight.deleteOne({ _id: id })
    .then(data => res.redirect('/flights'))
    .catch(error => res.status(400).json({ error }));
});



//Update
router.put('/:id', (req, res) => {
  const id = req.params.id
  req.body.cost = parseFloat(req.body.cost);

  Flight.updateOne({ _id: id }, req.body, { new: true })
    .then(data => res.redirect('/flights'))
    .catch(error => res.status(400).json({ error }));
});




// Create
router.post('/', (req, res) => {
  // Get user-submitted data
  const flightData = req.body;

  // Query the Destination model to get detailed information of the selected airport
  Destination.find({ airport: flightData.airport })
      .then(destinations => {
          // Add detailed information of the selected airport to the flight data
          flightData.destinations = destinations;

          // Create a new flight record
          return Flight.create(flightData);
      })
      .then(data => res.redirect('/flights'))
      .catch(error => res.status(400).json({ error }));
});





//Show
router.get('/:id', (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular snack from the database
  Flight.findOne({ _id: id })
    .then(foundFlight => {
      res.render('flights/Show', { flight: foundFlight });
    })
    .catch(error => res.status(400).json({ error }));
})



module.exports = router;
