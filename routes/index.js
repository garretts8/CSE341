const routes = require('express').Router();
const express = require('express');
const path = require('path');

const myController = require('../controller/index.js')


// Route for the root URL
routes.get('/', myController.rootFunction);
// other routes
routes.get('/Fabian', myController.fabFunction);

routes.get('/index',  myController.indFunction);


module.exports = routes;


// routes.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });