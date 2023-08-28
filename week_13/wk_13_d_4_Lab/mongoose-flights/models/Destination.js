const mongoose = require('./connection');

const { Schema, model } = mongoose;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        required: [true, "Please select a valid airport"]
    },

    arrival: {
        type: Date,
        required: true,
    }
});

const Destination = model('Destination', destinationSchema);

module.exports = Destination;
