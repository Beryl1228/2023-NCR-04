require('dotenv').config();
const express = require('express');
const app = express();
const vegetables = require('./models/vegetables.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const { createEngine } = require('express-react-views');
const mongoose = require('mongoose');
const Vegetable = require('./models/Vegetable.js')




// Set up view engine
app.use(express.urlencoded({extended:true}));
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


    //... and then farther down the files
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


//Index
app.get('/vegetables', (req, res) => {
    Vegetable.find({})
      .then((allVegetables) => {
        // console.log(allVegetables);
        res.render('Index', { vegetables: allVegetables });
      })
      .catch(error => {
        console.error("Can't load the page")
      })
  });


//New 
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});



//Create
app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true; 
    } else { 
        req.body.readyToEat = false; 
    }

    Vegetable.create(req.body).then((createdVegetable) => {
        //res.send(createdVegetable)
        res.redirect('/vegetables')
    })
    .catch(error  =>{
        // MUST SEND AN ERROR MESSAGE
        console.log("404 Can Not Find The Page");
    })
});


// Show
app.get('/vegetables/:id', (req, res) => {
    Vegetable.findOne({ _id: req.params.id })
      .then((foundVegetable) => {
        res.render('Show', {
          vegetable: foundVegetable
        })
      })
      .catch(error => {
        console.error(error)
      })
  })
  


app.listen(3000,() => {
    console.log('listening');
});

