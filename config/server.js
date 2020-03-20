const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const indexRouter = require("../src/routes/indexRoute");
const pessoaRouter = require("../src/routes/pessoaRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/pessoa", pessoaRouter);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

module.exports = app;