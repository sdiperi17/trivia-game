window.addEventListener("DOMContentLoaded", function() {
    var playBtn = $("play-btn");
    playBtn.click(event => {});

    var A = document.querySelectorAll(".answerA");
    var B = document.querySelectorAll(".answerB");
    var C = document.querySelectorAll(".answerC");
    var D = document.querySelectorAll(".answerD");
    var points = 0;

    console.log(A);

    function selectAnswer(arr) {
        arr.forEach(element => {
            element.addEventListener("click", function() {
                element.classList.toggle("active");
                console.log("click");
                if (element.getAttribute("data-points") == "unselected") {
                    points += 1;
                    element.setAttribute("data-points", "selected");
                    console.log(points);
                } else {
                    points -= 1;
                    element.setAttribute("data-points", "unselected");
                    console.log(points);
                }
            });
        });
    }

    selectAnswer(A);
    selectAnswer(B);
    selectAnswer(C);
    selectAnswer(D);

    // var A = document.querySelector(".answerA");
    // var B = document.querySelector(".answerB");
    // var C = document.querySelector(".answerC");
    // var D = document.querySelector(".answerD");

    // A.addEventListener("click", function() {
    //     A.setAttribute("style", "background-color: lightblue");
    //     console.log("click");
    // });

    // B.addEventListener("click", function() {
    //     B.setAttribute("style", "background-color: lightblue");
    //     console.log("click");
    // });

    // C.addEventListener("click", function() {
    //     C.setAttribute("style", "background-color: lightblue");
    //     console.log("click");
    // });

    // D.addEventListener("click", function() {
    //     D.setAttribute("style", "background-color: lightblue");
    //     console.log("click");
    // });
});
