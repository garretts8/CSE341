const path = require('path');
const rootFunction = (req, res, next) => {
    res.json('Howard Newman');
};

const fabFunction = (req, res, next) => {
    res.json('Fabian Newman');
}

const indFunction = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../index.html'));
}

module.exports = {rootFunction, fabFunction, indFunction};

// res.sendFile(path.join(__dirname, '../index.html'));