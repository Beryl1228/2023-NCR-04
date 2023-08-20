//require express
const express = require('express');

//set express()to a variable
const app = express();

const pokemon = require('./models/pokemon')

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/',(req,res)=>{
    res.send(console.log('Welcome to the Pokemon App!'))
})


app.get('/pokemon',(req, res)=>{
    // res.send(pokemon)
    res.render('Index',{ pokemon:pokemon })
})

app.get('/pokemon/:id',(req, res)=>{
    res.send(req.params.id)
})

app.get('/pokemon',(req, res)=>{
    // res.send(pokemon)
    res.render('Show',{ pokemon:pokemon })
})

//set a variable of portto 3000
app.listen(3000,() => {
    console.log('listening');
});

