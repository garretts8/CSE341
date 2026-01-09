const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

// Route
routes.get("/", lesson1Controller.mitchelleRoute);
routes.get("/spencer", lesson1Controller.spencerRoute);
routes.get("/dade", lesson1Controller.dadeRoute);

module.exports = routes;