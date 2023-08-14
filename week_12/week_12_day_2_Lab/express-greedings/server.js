// Require modules
const express = require('express');

// Create the Express app
const app = express();

const port = 3001;

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

app.listen(port, () => {
    console.log('listening on port', port);
});






