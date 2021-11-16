// require libraries
const express = require('express');
const exphbs = require('express-handlebars');

// setup app 
const app = express();

// middlewares

var hbs = exphbs.create({
    defaultLayout: 'main',
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => {
    console.log(req.query)
    res.render('home');
});

// begin server
const port = 3000;
app.listen(port, () => {
    console.log(`Giffy working`)
});