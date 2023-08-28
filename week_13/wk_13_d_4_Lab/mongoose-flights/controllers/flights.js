// Import Dependencies
const express = require("express");
const Flight = require("../models/Flight");

// const newFlight = new Flight();
// // Obtain the default date
// const dt = newFlight.departs;
// // Format the date for the value attribute of the input
// const departsDate = dt.toISOString().slice(0, 16);
// res.render('flights/new', {departsDate});

const router = express.Router();


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


//Create
router.post('/', (req, res) => {
    Flight.create(req.body)
      .then(data => res.redirect('/flights'))
      .catch(error => res.status(400).json({ error }));
  });






module.exports = router;
