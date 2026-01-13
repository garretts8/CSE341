const express = require("express");
const routes = express.Router();
const lesson1Controller = require("../controllers/lesson1");

// Route
routes.get("/", lesson1Controller.homeRoute);
routes.get("/mitchelle", lesson1Controller.mitchelleRoute);
routes.get("/spencer", lesson1Controller.spencerRoute);
routes.get("/dade", lesson1Controller.dadeRoute);

// This route expects an id GET parameter after the second /
// The route is /test, and then it will get a parameter, and the url will
//  have /test/(the id)
routes.get("/test/:id", lesson1Controller.testRoute);

//redirect test after submit
routes.post("/test/submit", lesson1Controller.testSubmit);


module.exports = routes;