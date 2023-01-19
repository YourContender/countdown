const items = document.querySelectorAll('.countdown-item > h4');
const countdownElement = document.querySelector('.countdown');

let countdownDate = new Date(2023, 01, 19, 1, 33, 0).getTime();

function getCountdownTime() {
    const currentTime = new Date().getTime();

    const difference = countdownDate - currentTime;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    let days = Math.floor(difference / oneDay) - 30;
    let hours = Math.floor((difference % oneDay) / oneHour);
    let minutes = Math.floor((difference % oneHour) / oneMinute);
    let seconds = Math.floor((difference % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    items.forEach((item, index) => {
        item.textContent = values[index];
    })

    if (days < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4>Як покупка?</h4>";
    }
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();