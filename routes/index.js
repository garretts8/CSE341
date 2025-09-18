const routes = require('express').Router();
const express = require('express');
const path = require('path');




// Route for the root URL
routes.get('/', (req, res) => {
    res.send('Howard Newman');
});
// other routes
routes.get('/Fabian', (req, res) => {
    res.send('Fabian Newman');
});

routes.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


module.exports = routes;