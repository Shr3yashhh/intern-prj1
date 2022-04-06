const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home'), {
        firstName : "shreyash",
        lastName : "shretha",
        age : "21"
    }
})

app.listen(5050);   