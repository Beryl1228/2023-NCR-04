const mongoose = require('mongoose');


// Schema is like the blueprint or structure
const PokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img: { type: String, required: true }
});

//model adds all the methods to the schema that we can use our data
const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;