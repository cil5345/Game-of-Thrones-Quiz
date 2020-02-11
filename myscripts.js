
let container = document.getElementById("welcome-screen");
let mainSubmitButton = document.getElementById("submit");
let timeEl = document.getElementById("timer");

// console.log (mainSubmitButton);





mainSubmitButton.addEventListener("click", function () {
    container.style.visibility = "hidden";
    // Starts a timer
    gameTimer();

    //adds the quiz elements


});

function gameTimer() {
    timeLeft = 60;
    var timeInterval = setInterval(function () {

    }, 1000);
}