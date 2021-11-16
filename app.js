// require libraries
const { response } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');

const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "9ATAVVVH21VH", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

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
    
    // home page before query
    term = ""
    if (req.query.term) {
        term = req.query.term
    }

    // Tenor.Search.Query("keyword", "limit #")
    Tenor.Search.Query(term, "10").then(response => {
        // store gifs
        const gifs = response;
        res.render('home', { gifs });
    }).catch(console.error);    
});

// begin server
const port = 3000;
app.listen(port, () => {
    console.log(`Giffy working`)
});