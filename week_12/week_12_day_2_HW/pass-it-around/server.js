// const express = require('express');
// const app = express();

// const beers = ["99 Bottles of beer on the wall"];

// const port = 3000;


// app.get('/', (req, res) => { 
//     res.send(`
//     <h1> ${beers[0]} </h1>
//     <a href="/98"> take one down, pass it around </a>
//     `);
//   });


//   app.get('/:number_of_bottles', (req, res) => {
//     const number_of_bottles = parseInt(req.params.number_of_bottles);
//     const nextLink = number_of_bottles > 0 ? `<a href="/${number_of_bottles-1}">Take one down, pass it around</a>` : '';
//     res.send(`
//     <h1>${number_of_bottles} Bottles of beer on the wall</h1>
//     ${nextLink}
//     <a href="/">start over</a>
//     `
//     );

// });


// app.listen(port,() => {
//     console.log('listening on port' , port);
// });


const express = require('express');
const app = express();

const bugs = ["99 little bugs"];

const port = 3000;


app.get('/', (req, res) => { 
    res.send(`
    <h1> ${bugs[0]} </h1>
    <a href="/98"> Take one down</a> <br/>
    <a href="/100"> Patch it around</a>
    `);
  });


  app.get('/:number_of_bugs', (req, res) => {
    const number_of_bugs = parseInt(req.params.number_of_bugs);
    const miusLink = number_of_bugs > 0 ? `<a href="/${number_of_bugs-1}">Take one down</a>` : '';
    const plusLink = number_of_bugs > 0 && number_of_bugs<= 127 ? `<a href="/${number_of_bugs+1}">Patch it around</a>` : '';

    res.send(`
    <h1>${number_of_bugs} little bugs in the code </h1>
    ${miusLink} <br/>
    ${plusLink} <br/>
    <a href="/">start over</a>
    `
    );

});


app.listen(port,() => {
    console.log('listening on port' , port);
});