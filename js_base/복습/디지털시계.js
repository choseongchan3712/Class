const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

const timer = () => {
    const date = new Date();
    const hourNow = date.getHours();
    const minNow = date.getMinutes();
    const secNow = date.getSeconds();
    hourEl.innerHTML = String(hourNow).padStart(2, '0');
    minEl.innerHTML = String(minNow).padStart(2, '0');
    secEl.innerHTML = String(secNow).padStart(2, '0');
}

timer();

setInterval(timer, 1000);


