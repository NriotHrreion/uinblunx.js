"use strict";

const fs = require("fs");
const express = require("express");
const chalk = require("chalk");
const opn = require("opn");

var app = express();

app.get("/", (req, res) => {
    res.set("Content-Type","text/html;charset=utf-8");
    res.send(fs.readFileSync("./example/index.html").toString());
});

app.get("/main.js", (req, res) => {
    res.set("Content-Type","text/javascript;charset=utf-8");
    res.send(fs.readFileSync("./example/main.js").toString());
});

app.get("/uinblunx.min.js", (req, res) => {
    res.set("Content-Type","text/javascript;charset=utf-8");
    res.send(fs.readFileSync("./uinblunx.min.js").toString());
});

app.listen(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000), function() {
    console.log(chalk.cyan("Server Start!"));
    opn("http://localhost:"+ this.address().port);
});
