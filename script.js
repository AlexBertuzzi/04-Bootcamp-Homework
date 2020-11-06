var secondsDisplay = document.querySelector("#timer");
var totalSeconds = 100;
var secondsElapsed = 0;
var interval;
var secondsLeft ="";

function startTimer() {
    if (secondsElapsed < 100) {
        interval = setInterval(function() {
            secondsElapsed++;
            console.log(secondsElapsed);
            secondsLeft = (totalSeconds - secondsElapsed);
            console.log(secondsLeft);            
            secondsDisplay.textContent = secondsLeft;
            if (secondsElapsed == 100) {
                clearInterval(interval);
            }
        }, 1000);
    }
}
startTimer();


