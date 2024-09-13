// 기본 타입

//1. number: 숫자
//2. string: 문자
//3. boolean: true / false
//5. null
//6. undefined
//7. NaN

// var num = 10;
// var str = `배고프다`;
// var bool = true;

// console.log(`숫자는: ${num}`);
// console.log(`글자: ${str}`);

// var nam = prompt('이름을 적어주세요');
// var age = prompt('나이를 적어주세요');

// document.write(`안녕 내이름은 ${nam}야 나이는 ${age}살이라고 해.`);

// document.write(typeof(num));
// document.write(typeof(str));
// document.write(typeof(bool));

//typeof() 어떤 타입인지 확인 하기

// document.write('<a href="https://www.naver.com" class="box">naver</a>');
// var $red = document.querySelector('.box');
// $red.style.color = "red";

const red = document.querySelector(".red");
const yelllow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const box = document.querySelector(".color_box");

red.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
yelllow.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});
green.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});
blue.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

const java = "자바스크립트";
document.write(`<h1>${java}</h1>`);
document.write(`<h2>${java}</h2>`);
document.write(`<h3>${java}</h3>`);
document.write(`<h4>${java}</h4>`);
document.write(`<h5>${java}</h5>`);
document.write(`<h6>${java}</h6>`);

const plus = (a, b) => {
  return (a + b);
};

console.log(plus);

document.write(`a + b = ${plus(5, 5)}`);
