const route = require("express").Router();
const dbCon = require("./connection");

// api testing
route.get("/", (req, res) => {
  res.json("Hello World");
});

module.exports = route;
