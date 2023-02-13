const startTimer = document.getElementById("start-timer");
const fiveMinutes = document.getElementById("5-minutes");
const tenMinutes = document.getElementById("10-minutes");
const fifteenMinutes = document.getElementById("15-minutes");
const thirtyMinutes = document.getElementById("30-minutes");
const fiftyMinutes = document.getElementById("50-minutes");
const timeInput = document.getElementById("time-input");
const timerOutput = document.getElementById("timer-output");
const pauseTimer = document.getElementById("pause-timer");
const stopTimer = document.getElementById("stop-timer");
const alarm = document.getElementById("alarm");

let countdown;

function startCountdown(minutes) {
    clearInterval(countdown);
    let remainingTime = minutes * 60;
    countdown = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(countdown);
            timerOutput.innerHTML = "Finished!";
            // Ajouter un son de minuteur
            return;
        }
        timerOutput.innerHTML = formatTime(remainingTime);
        remainingTime--;
        let alarm = document.getElementById("alarm");
        if (remainingTime <= 0) {
            clearInterval(countdown);
            timerOutput.innerHTML = "Finished!";
            alarm.currentTime = 0;
            alarm.play();
            return;
        }
    }, 1000);
    pauseTimer.removeAttribute("disabled");
    stopTimer.removeAttribute("disabled");
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    return minutes + ":" + remainingSeconds;
}

startTimer.addEventListener("click", function() {
    let time = timeInput.value;
    if (time) {
        startCountdown(time);
    }
});

stopTimer.addEventListener("click", function() {
    clearInterval(countdown);
    timerOutput.innerHTML = "0:00";
    stopTimer.setAttribute("disabled", true);
    pauseTimer.setAttribute("disabled", true);
    alarm.pause();
    alarm.currentTime = 0;
});

fiveMinutes.addEventListener("click", function() {
    startCountdown(5);
});

tenMinutes.addEventListener("click", function() {
    startCountdown(10);
});

fifteenMinutes.addEventListener("click", function() {
    startCountdown(15);
});

thirtyMinutes.addEventListener("click", function() {
    startCountdown(30);
});

fiftyMinutes.addEventListener("click", function() {
    startCountdown(50);
});

pauseTimer.addEventListener("click", function() {
    clearInterval(countdown);
    pauseTimer.setAttribute("disabled", true);
});

stopTimer.addEventListener("click", function() {
    clearInterval(countdown);
    timerOutput.innerHTML = "0:00";
    stopTimer.setAttribute("disabled", true);
    pauseTimer.setAttribute("disabled", true);
});
