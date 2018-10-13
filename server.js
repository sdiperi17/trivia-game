var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var axios = require("axios");

app.use(express.static(__dirname));

// whatever data comes from json, parse it and put it on body object example: req.body
app.use(bodyParser.json());

// turn it from string/urlencoded into regular json code
app.use(bodyParser.urlencoded({ extended: false }));

// set view engine to ejs
app.set("view engine", "ejs");

var server = app.listen(3000, () => {
    console.log("server is running");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/play", (req, res) => {
    res.render("play");
});

app.post("/play", (req, res) => {
    var questionsAmount = req.body.amountOfQuestions;

    axios
        .get(`https://opentdb.com/api.php?amount=${questionsAmount}`)

        .then(function(data) {
            console.log("keys", Object.keys(data));
            console.log(data.data.results);
            res.render("play", {
                data: data.data.results
            });
        });
});
