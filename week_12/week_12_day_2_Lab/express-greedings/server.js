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

/*  //Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.query); // Print query parameters
    console.log(req.params)
    res.send(`<h1>Tip Total: ${req.params.tipPercentage} </h1>`);
}); 
 */


//Magic 8 Ball
const magicBalls = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

let ball = magicBalls[Math.floor(Math.random()*magicBalls.length)];

app.get('/', (req, res) => {
    console.log(req.query); // Print query parameters
    console.log(req.params)
    res.send(`<h1> magic 8 ball </h1>
    <a href="http://localhost:3001/magic/Will%20I%20Be%20A%20Millionaire">Will I be a Millionaire ?</a>`);
}); 

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    console.log(req.query); // Print query parameters
    console.log(req.params)
    res.send(`<h1> ${ball}</h1>`);
});

app.listen(port, () => {
    console.log('listening on port', port);
});






