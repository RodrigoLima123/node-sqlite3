var request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router();

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


// Carrega os Models
const Product = require('./models/product');


// bodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));


// Rotas
app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;