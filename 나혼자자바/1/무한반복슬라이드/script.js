const boxWrap = document.querySelector(".box_wrap");
const box = document.querySelector(".box");

box.style.width = '100vw';
box.style.height = '100%';
box.style.backgroundColor = `rgb(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;

var num = 0;

setInterval(() => {
  count = num++;
  let wid = 100 * count;
  let wrapWidth = 100 * (count + 1);
  boxWrap.insertAdjacentHTML('beforeend', `<div class="box${count}"></div>`);
  boxWrap.style.width = `${wrapWidth}`;
  let boxNo = document.querySelector(`.box${count}`);
  boxNo.style.width = '100vw';
  boxNo.style.height = '100%';
  boxNo.style.backgroundColor = `rgb(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;
  boxWrap.style.transition = '0.5s';
  boxWrap.style.transform = `translateX(-${wid}vw)`;
}, 3000)