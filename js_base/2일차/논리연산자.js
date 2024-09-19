//1. and(&&) 연산자
//2. or(||) 연산자
//3. not(!) 연산자

const num_1 = 10;
const num_2 = 2;

//and
console.log(num_1 > num_2 && num_1 < num_2);
//값을 비교 후 하나라도 거짓이면 거짓으로 반환

//or 
console.log(num_1 > num_2 || num_1 < num_2);
//값을 비교 후 하나라도 참이면 참으로 반환함

//not
const result = num_1 > num_2;
console.log(!result);