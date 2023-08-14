// Require modules
const express = require('express');

// Create the Express app
const app = express();

const port = 3001;


/*
//Greetings 
// Route for '/greeting' without any parameters
app.get('/greeting', (req, res) => {
    console.log(req.query); // Print query parameters
    res.send('<h1>Hello, stranger</h1>');
});

// Route for '/greeting/:name' with a parameter named 'name'
app.get('/greeting/:name', (req, res) => {
    console.log(req.params); // Print route parameters
    res.send(`Hi ${req.params.name}! It's so great to see you!`);
});
*/

 //Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.query); // Print query parameters
    console.log(req.params)
    res.send(`<h1>Tip Total: ${req.params.tipPercentage} </h1>`);
}); 


app.listen(port, () => {
    console.log('listening on port', port);
});






