const clockContainer = document.querySelector(".clock");

function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    clockContainer.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock);