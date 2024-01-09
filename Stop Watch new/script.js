let counterMinutes = 2;
let counterSeconds = 0;
let intervalId;

const counterElement = document.querySelector('.counter');

const editBtn = document.getElementById('editBtn');
editBtn.style.color = "white"
editBtn.style.backgroundColor = "#0090dd"
editBtn.style.border = " 2px solid #0090dd"
editBtn.style.borderRadius = "7px"

const resetBtn = document.getElementById('resetBtn');
resetBtn.style.color = "white"
resetBtn.style.backgroundColor = "#e7a40f"
resetBtn.style.border = " 2px solid #e7a40f"
resetBtn.style.borderRadius = "7px"

const stopBtn = document.getElementById('stopBtn');
stopBtn.style.color = "white"
stopBtn.style.backgroundColor = "#f36464"
stopBtn.style.border = " 2px solid #f36464"
stopBtn.style.borderRadius = "7px"

editBtn.addEventListener('click', startCounter);
resetBtn.addEventListener('click', resetCounter);
stopBtn.addEventListener('click', stopCounter);

updateCounterDisplay();

function startCounter() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            if (counterSeconds > 0) {
                counterSeconds--;
            } else {
                if (counterMinutes > 0) {
                    counterMinutes--;
                    counterSeconds = 59;
                } else {
                    clearInterval(intervalId);
                    intervalId = null;
                }
            }
            updateCounterDisplay();
        }, 1000);
    }
}

function resetCounter() {
    clearInterval(intervalId);
    intervalId = null;
    counterMinutes = 2;
    counterSeconds = 0;
    updateCounterDisplay();
}

function stopCounter() {
    clearInterval(intervalId);
    intervalId = null;
}

function updateCounterDisplay() {
    const minutesStr = counterMinutes < 10 ? `0${counterMinutes}` : `${counterMinutes}`;
    const secondsStr = counterSeconds < 10 ? `0${counterSeconds}` : `${counterSeconds}`;
    counterElement.textContent = `${minutesStr}:${secondsStr}`;
    counterElement.style.color = '#ff9500';
    counterElement.style.fontFamily = 'clockicons, sans-serif';
    counterElement.style.fontSize = '80px';


}