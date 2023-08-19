//require express
const express = require('express');

//set express()to a variable
const app = express();

app.get('/',(req,res)=>{
    res.send(console.log('Welcome to the Pokemon App!'))
})

//set a variable of portto 3000
app.listen(3000,() => {
    console.log('listening');
});