// let a = 1;
// let b = 2;

const text = (a, b) => {
  console.log(`두변수의 합은 ${a + b}입니다.`);
};

text(54654, 7891);

const textC = (a, b) => {
  if (a > b) {
    console.log("첫번째 수가 더 큽니다.");
  } else if (a < b) {
    console.log("두번째 수가 더 큽니다.");
  } else {
    console.log("두 수가 같습니다.");
  }
};

textC(65123, 5);
