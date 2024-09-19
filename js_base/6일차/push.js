const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

// num1.push('넷', 5);

// num1.push(num2)
// ! push에 배열을 추가하면 배열이 합쳐지는게 아니라, 추가만 됨. 또한 불변성을 유지하지 못 함.

// console.log(num1);

const num3 = num1.concat(num2);
// ! concat: 배열을 합칠때 사용. 불변성 유지. 기존배열을 복사하여 새로운 합쳐진 배열을 반환

console.log(num3);
console.log(num1);