// DOM => Document Object Model => 브라우저를 꾸미는 것
const box = document.querySelectorAll(".box");
const box1 = document.querySelector('.box:nth-child(1)');
const box2 = document.querySelector('.box:nth-child(2)');
const box3 = document.querySelector('.box:nth-child(3)');
console.log(box);
console.log(box[2]);
console.log(box[1]);
console.log(box[0]);

//queryselector => html 태그를 선택 함(css와 동일함)

box.forEach((e) => {
  e.style.width = "100px";
  e.style.height = "100px";
  e.style.backgroundColor = "red";
  e.style.marginTop = "10px";
});

box2.style.backgroundColor = "green";
box3.style.backgroundColor = "blue";

box[1].addEventListener("click", () => {
    box[1].style.backgroundColor = "salmon";
    box[1].innerText = "1";
});

//node => 계층