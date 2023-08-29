const mongoose = require('./connection');
const Flight = require('./Flight');

const db = mongoose.connection;

db.on('open', () => {
    // Array of starter flights
    const starterFlights = [
        { airline: "American", flightNo: 3404, departs: new Date("2023-09-01T08:00:00Z") },
        { airline: "Southwest", flightNo: 4032, departs: new Date("2023-09-02T12:00:00Z") },
        { airline: "United", flightNo: 5324, departs: new Date("2023-09-03T15:30:00Z") },
    ];

    // Delete all flights
    Flight.deleteMany({})
        .then(data => {
            Flight.create(starterFlights)
                .then(data => {
                    db.close();
                })
                .catch(error => {
                    console.error(error);
                    db.close();
                });
        })
        .catch(error => {
            console.error(error);
            db.close();
        });
});
