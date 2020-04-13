//for http server
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//load HTTPserver routing file
var http_routes = require('./routes/routes')

//midlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes for http server
app.use('/api/', http_routes)


module.exports = app