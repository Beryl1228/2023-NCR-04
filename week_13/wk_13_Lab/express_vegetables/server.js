const express = require('express');
const app = express();
const vegetables = require('./models/vegetables.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const { createEngine } = require('express-react-views');




// Set up view engine
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())


//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));


//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});




//New route
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});

//post routes 
app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    vegetables.push(req.body);
    console.log(vegetables);
    res.send('data received');
});

//put this above your Show route
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('Show',{
    vegetable: vegetables[req.params.indexOfVegetablesArray]
   });
});



app.get('/vegetables', function(req, res){
    res.render('Index', { vegetables: vegetables });
});    



app.listen(3000,() => {
    console.log('listening');
});

