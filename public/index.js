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

    console.log(A);

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
                } else {
                    points -= 1;
                    element.setAttribute("data-points", "unselected");
                    POINTS.setAttribute("value", points);
                    console.log(points);
                }
            });
        });
    }

    selectAnswer(A);
    selectAnswer(B);
    selectAnswer(C);
    selectAnswer(D);
});
