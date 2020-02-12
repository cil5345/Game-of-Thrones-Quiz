
let introContainer = document.getElementById("welcome-screen");
let quizContainer1 = document.getElementById("quiz-container")
let mainSubmitButton = document.getElementById("submit");
let timeEl = document.getElementById("timer");
let quizQuestion = document.getElementById("choice-question");
let aAnswer = document.getElementById("choice-a");
let bAnswer = document.getElementById("choice-b");
let cAnswer = document.getElementById("choice-c");
let dAnswer = document.getElementById("choice-d");
let gameOverContainer = document.getElementById("end-game");

// console.log(dQuestion);
// console.log(timeEl);
// console.log(quizContainer1);
// console.log (mainSubmitButton);



// ========================================================================
var questions = [{
    q: "What is the name of King Joffery's valyrian steel sword?",
    a: "a",
    c1: "Widow's Wail",
    c2: "Oath Keeper",
    c3: "Lion's Claw",
    c4: "Pointy"
}, {
    q: "What is John Snow's real name?",
    a: "c",
    c1: "Aerys Targaryen",
    c2: "John Stark",
    c3: "Aegon Targaryen",
    c4: "John Smith"
}, {
    q: "Which is the worst season of Game of Thrones?",
    a: "d",
    c1: "Season 1",
    c2: "Season 6",
    c3: "Season 2",
    c4: "Season 8"
}];


console.log(questions[1].c1);


// ========================================================================


mainSubmitButton.addEventListener("click", function loadQuestion() {

    introContainer.style.visibility = "hidden";
    quizContainer1.style.visibility = "visible";



    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;


        if (timeLeft === 0) {
            timeEl.textContent = "";

            clearInterval(timeInterval);
            endGame();
        }

    }, 1000);

    setQuestions();




    function setQuestions() {
        var i = 0;
        var objQues = questions[i];
        var correctAnswer = objQues.a;
        console.log(correctAnswer);
        quizQuestion.textContent = objQues.q;
        aAnswer.textContent = objQues.c1;
        bAnswer.textContent = objQues.c2;
        cAnswer.textContent = objQues.c3;
        dAnswer.textContent = objQues.c4;

        aAnswer.addEventListener('click', function () {
            // console.log("hello")
            console.log(objQues.c1);
        });
        bAnswer.addEventListener('click', function () {
            // console.log("hello")
            console.log(objQues.c2);
        });
        cAnswer.addEventListener('click', function () {
            // console.log("hello")
            console.log(objQues.c3);
        });
        dAnswer.addEventListener('click', function () {
            // console.log("hello")
            console.log(objQues.c4);
        });


        if (correctAnswer === true) {
            console.log(correctAnswer);
        }
    }


  

    function endGame() {
        gameOverContainer.style.visibility = "visible";
        quizContainer1.style.visibility = "hidden";

    }
    // Starts a timer
    // var timeLeft = 60;
    // var timeInterval = setInterval(function() { 
    // timeEl.textContent = timeLeft + "seconds remaining";     
    // });

    //adds the quiz elements

});

// ========================================================================