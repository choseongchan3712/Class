//특정 조건을 비교하여 원하는 식을 실행

// if (조건식 => boolean) {
//     조건에 만족하면 실행할 내용
// }

const num_1 = 5;
const num_2 = "5";

if (num_1 > num_2) {
  //=> if 는 조건식이 참일 때만 내용이 실행됨
  console.log("첫번째 숫자가 더 큽니다.");
} else if (num_1 === num_2) { //=> if의 조건이 거짓일 떄 실행하는 조건식
    console.log("두 수가 같습니다.");
} 
else if (typeof num_1 !== typeof number) {
    console.log("숫자를 입력해 주세요.")
}
else if (typeof num_2 !== typeof number) {
    console.log("숫자를 입력해 주세요.")
}
else { //=> if 의 조건이 거짓일 때 실행 함
    console.log("두번째 수가 더 큽니다.");
}

if (num_1 > num_2) {
    console.log("첫번째 숫자가 더 큽니다.");
} else if (num_2 > num_1) {
    console.log("두번째 숫자가 더 큽니다.");
} else if (num_1 === num_2) {
    console.log("두 숫자가 같습니다.");
} else {
    console.log("숫자를 입력하세요");
}

if (typeof (num_1 + num_2) !== typeof number) {
    console.log("숫자를 입력하세요");
}
