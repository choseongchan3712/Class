//리턴: 함수 내부에서 작업처리 후 밖에서 사용할 수 있도록 결과값을 던저주는 역할.

const plus = (a, b) => {
    return a + b; //enter 치면 안 됨, 줄바꿈이 필요 할때 는 소괄호를 이용하여 사용.
};

const result = plus(5, 10);
console.log(result);

const plus2 = (a, b) => a + b; // 중과로 및 return 생략

const result2 = plus2(5, 10);
console.log(result2);