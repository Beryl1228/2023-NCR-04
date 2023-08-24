require('dotenv').config();
const express = require('express');
const app = express();
const pokemons = require('./models/pokemons');
const mongoose = require('mongoose');
const Pokemon = require('./models/Pokemon');

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

// Open event on the mongoose connection
db.once('open', async () => {
  console.log('Connected to MongoDB');

  const existingPokemons = await Pokemon.find({});
  if (existingPokemons.length === 0) {
    // Insert the pokemons data into the collection
    Pokemon.create(pokemons)
      .then((createdPokemons) => {
        console.log('Pokemons inserted:', createdPokemons);
      })
      .catch((error) => {
        console.error('Error inserting pokemons:', error);
      });
  }

  // Start the server
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
  });
});

app.get('/pokemons', (req, res) => {
  Pokemon.find({})
    .then((allPokemons) => {
      console.log('Found Pokemons:', allPokemons);
      res.render('Index', { pokemons: allPokemons });
    })
    .catch((error) => {
      console.error("Can't load the page", error);
    });
});

// New
app.get('/pokemons/new', (req, res) => {
  res.render('New')
})



app.post('/pokemons', (req, res) => {
  Pokemon.create(req.body)
    .then((createdPokemon) => {
      res.redirect('/pokemons');
    })
    .catch((error) => {
      console.log("404 Can't Find The Page",error);
    });
});


app.get('/pokemons/:id', (req, res) => {
  Pokemon.findOne({ _id: req.params.id })
    .then((foundPokemon) => {
      res.render('Show', {
        pokemon: foundPokemon,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
