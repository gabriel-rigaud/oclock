const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const stopBtn = document.querySelector("#stop-btn");
const timeDisplay = document.querySelector(".time");

let interval;
let time = 0;

startBtn.addEventListener("click", startChrono);
pauseBtn.addEventListener("click", pauseChrono);
stopBtn.addEventListener("click", stopChrono);

function startChrono() {
    interval = setInterval(() => {
        time++;
        let date = new Date(time * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }, 10);
    startBtn.style.visibility = "hidden";
    pauseBtn.style.visibility = "visible";
    stopBtn.style.visibility = "visible";
}

function pauseChrono() {
    clearInterval(interval);
    startBtn.style.visibility = "visible";
    pauseBtn.style.visibility = "hidden";
}

function stopChrono() {
    clearInterval(interval);
    time = 0;
    timeDisplay.textContent = "0:00:00:000";
    startBtn.style.visibility = "visible";
    pauseBtn.style.visibility = "hidden";
    stopBtn.style.visibility = "hidden";
}
