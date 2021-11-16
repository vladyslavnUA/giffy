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
    // get url of gif
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245';

    res.render('hello-gif', { gifUrl })
});

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', { name })
});

// begin server
const port = 3000;
app.listen(port, () => {
    console.log(`Giffy working`)
});