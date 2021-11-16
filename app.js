// require libraries
const express = require('express');

// setup app 
const app = express();

// middlewares

// routes
app.get('/', (req, res) => {
    res.send('hello there!');
})

// begin server
const port = 3000;
app.listen(port, () => {
    console.log(`Giffy working`)
});