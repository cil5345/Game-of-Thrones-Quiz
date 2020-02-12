
let introContainer = document.getElementById("welcome-screen");
let quizContainer1 = document.getElementById("quiz-container")
let mainSubmitButton = document.getElementById("submit");
let timeEl = document.getElementById("timer");
let quizQuestion = document.getElementById("choice-question");
let aAnswer = document.getElementById("choice-a");
let bAnswer = document.getElementById("choice-b");
let cAnswer = document.getElementById("choice-c");
let dAnswer = document.getElementById("choice-d");

// console.log(dQuestion);
// console.log(timeEl);
// console.log(quizContainer1);
// console.log (mainSubmitButton);



// ========================================================================
var questions = [{
    q:"What is the name of King Joffery's valyrian steel sword?",
    a: "A",
    c1: "Widow's Wail",
    c2: "Oath Keeper",
    c3: "Lion's Claw",
    c4: "Pointy"
}, {
    q:"What is John Snow's real name?",
    a: "C",
    c1: "Aerys Targaryen",
    c2: "John Stark",
    c3: "Aegon Targaryen",
    c4: "John Smith"
}, {
    q:"Which is the worst season of Game of Thrones?",
    a: "D",
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
            // endGame();
        }
        setQuestions();
    }, 1000);

    function setQuestions() {
        var objQues = questions[0];
        quizQuestion.textContent = objQues.q;
        aAnswer.textContent = objQues.c1;
        bAnswer.textContent = objQues.c2;
        cAnswer.textContent = objQues.c3;
        dAnswer.textContent = objQues.c4;
        // aQuestion.textContent = 
    // console.log(questions
    }
    // Starts a timer
    // var timeLeft = 60;
    // var timeInterval = setInterval(function() { 
    // timeEl.textContent = timeLeft + "seconds remaining";     
    // });

    //adds the quiz elements

});

// ========================================================================