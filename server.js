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
var port = process.env.PORT || 3000;
var server = app.listen(port, () => {
    console.log(`server is running ${port}`);
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/play", (req, res) => {
    res.render("play");
});

app.post("/play", (req, res) => {
    var questionsAmount = req.body.amountOfQuestions;
    var questionCategory = req.body.gameCategory;
    var difficulty = req.body.gameDifficulty;
    var questionType = req.body.questionType;
    console.log(questionCategory);

    axios
        .get(
            `https://opentdb.com/api.php?amount=${questionsAmount}&category=${questionCategory}&difficulty=${difficulty}&type=multiple`
        )

        .then(function(data) {
            console.log("keys", Object.keys(data));
            console.log(data.data.results);
            res.render("play", {
                data: data.data.results
            });
        });
});

app.get("/score", (req, res) => {
    res.render("score");
});

app.post("/score", (req, res) => {
    var correctAnswers = req.body.scoreInput;
    var totalQuestions = req.body.totalQuestions;
    var grade = Math.floor((correctAnswers / totalQuestions) * 100);
    var commentForPlayer;

    if (grade >= 80) {
        commentForPlayer = "Excellent";
    } else if (grade >= 70) {
        commentForPlayer = "Good job";
    } else {
        commentForPlayer = "Try again";
    }

    // console.log(points);
    res.render("score", {
        points: correctAnswers,
        totalQuestions,
        grade,
        commentForPlayer
    });
});
