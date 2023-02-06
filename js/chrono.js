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
        timeDisplay.textContent = time;
    }, 1000);
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
    timeDisplay.textContent = time;
    startBtn.style.visibility = "visible";
    pauseBtn.style.visibility = "hidden";
    stopBtn.style.visibility = "hidden";
}
