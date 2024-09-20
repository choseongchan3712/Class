// 객체: 배열처럼 특정값을 저자. 배열과 다르게 상세히 속성과 값을 저장할 수 있음.
// 변수, 숫자, 문자, 배열, 객체 등 저장 가능
// 객체 내부에 함수를 만들 수 있는데, 이때 메서드라고 함



const obj = {
  name: "자바스크립트",
  age: 10,
  job: "초등생",
  intro: function() {
    document.write(`이름: ${this.name} <br>`);
    document.write(`나이: ${this.age}<br>`);
    document.write(`직업: ${this.job}<br>`);
  },
};

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.job);
obj.intro();
