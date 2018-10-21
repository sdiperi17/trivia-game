window.addEventListener("DOMContentLoaded", function() {
    var playBtn = $("play-btn");
    playBtn.click(event => {});

    window.addEventListener("DOMContentLoaded", function() {
        var getResults = document.querySelector(".getResults");
        getResults.click(event => {});
    });

    var A = document.querySelectorAll(".answerA");
    var B = document.querySelectorAll(".answerB");
    var C = document.querySelectorAll(".answerC");
    var D = document.querySelectorAll(".answerD");
    var points = 0;

    var POINTS = document.querySelector("#points");

    function selectAnswer(arr) {
        arr.forEach(element => {
            element.addEventListener("click", function() {
                element.classList.toggle("active");
                console.log("click");
                if (element.getAttribute("data-points") == "unselected") {
                    points += 1;
                    element.setAttribute("data-points", "selected");
                    POINTS.setAttribute("value", points);
                    console.log(points);
                } else if (element.getAttribute("data-points") == "selected") {
                    points -= 1;
                    element.setAttribute("data-points", "unselected");
                    POINTS.setAttribute("value", points);
                    console.log(points);
                }

                var questionNumber = element.getAttribute("data-question");
                var questionArr = document.querySelectorAll(
                    `[data-question="${questionNumber}"]`
                );
                questionArr.forEach(question => {
                    if (question != element) {
                        question.classList.remove("active");
                    }
                });
            });
        });
    }

    selectAnswer(A);
    selectAnswer(B);
    selectAnswer(C);
    selectAnswer(D);
});
