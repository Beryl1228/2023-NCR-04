//require express
const express = require('express');

//set express()to a variable
const app = express();

const pokemon = require('./models/pokemon')
const { createEngine } = require('express-react-views');

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));



app.get('/',(req,res)=>{
    res.send(console.log('Welcome to the Pokemon App!'))
})



// app.get('/pokemon/:id',(req, res)=>{
//     res.send(req.params.id)
// })


app.get('/pokemon/:index', (req, res) => {
    const index = req.params.index;
    const selectedPokemon = pokemon[index]; // Make sure this line is correct
    res.render('Show', {
        pokemon: selectedPokemon
    });
});


app.get('/pokemon',(req, res)=>{
    // res.send(pokemon)
    res.render('Index',{ pokemon:pokemon }) 
})


//set a variable of portto 3000
app.listen(3000,() => {
    console.log('listening');
});

