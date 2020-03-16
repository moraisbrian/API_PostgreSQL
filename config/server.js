const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const indexRouter = require("../src/routes/indexRoute");
const pessoaRouter = require("../src/routes/pessoaRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/pessoa", pessoaRouter);

module.exports = app;