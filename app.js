const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');
const portfolio = require('./portfolio.json');

const PORT = process.env.PORT || 4444;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    exhbs({
        extname: 'hbs',
    }),
);

app.get('/', (req, res) => {

    res.render('home', { cssFileName: 'home', pageTitle: 'Студия' });
})
app.get('/portfolio', (req, res) => {

    res.render('about', { portfolio, cssFileName: 'about', pageTitle: 'Портфолио' });
})
app.get('/contacts', (req, res) => {

    res.render('contacts', { products, cssFileName: 'products', pageTitle: 'Контакты' });
})


app.get('/project/:projectId', (req, res) => {

    const project = portfolio.find(pr => pr.id === req.params.projectId);

    res.render('project', { project, cssFileName: 'about', pageTitle: 'Проект' });
    console.log(req.params);
})


app.get('/product/:productId', (req, res) => {

    const product = products.find(p => p.id === req.params.productId);

    res.render('product', { product });
    console.log(req.params);
})

app.listen(PORT, () => {
    console.log(`Порт ${4444}`);
});