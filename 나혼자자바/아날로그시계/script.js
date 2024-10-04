const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');


const timerHandler = () => {
  const date = new Date();
  console.log(date);
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  hourEl.style.transform = `rotateZ(${(hour * 30) + min * (360 / 12 / 60)}deg)`;
  minuteEl.style.transform = `rotateZ(${(min * 6) + sec * (360 / 60 / 60)}deg)`;
  secondEl.style.transform = `rotateZ(${sec * 6}deg)`;
}

timerHandler();

setInterval(timerHandler, 1000);