const body = document.querySelector('body');
const a = document.createElement('a');//엘리먼트를 생성할 때 사용

body.append(a);// 선택자의 마지막 자식으로 추가

a.innerText = 'Hello';

// console.log(a);