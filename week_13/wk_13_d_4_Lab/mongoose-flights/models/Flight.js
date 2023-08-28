const mongoose = require('./connection');

const { Schema, model } = mongoose;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: [true, "Please select a valid airline"]
    },

    flightNo: {
        type: Number,
        required: [true, "Flight number must be between 10 and 9999"],
        min: 10,
        max: 9999
    },

    departs: {
        type: Date,
        required: true,
        default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // One year from now
    }
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;
