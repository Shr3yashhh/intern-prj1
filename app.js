const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars')

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutDir : `${__dirname}/views/layouts`
 }))

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'})
})

app.listen(port, () => {
    console.log(`app listening to port ${port}`);
})

console.log(__dirname);