let number = parseInt(prompt('몇 명이서 참가하시나요?'));

while(isNaN(number)) {
  number = parseInt(prompt('숫자를 입력하세요'));
}

const order = document.querySelector('#order');
const word = document.querySelector('#word');
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const regex = /^[ㄱ-ㅎ|가-힣]+$/;
let words = [];

var num = 1;
order.textContent = num; //userNum 함수 뿐만 아니라 여기에도 order.textContent를 써야 처음에 들어갔을때 1이 나옴

// const userNum = () => {
//   if (num < number) {
//     num++;
//   } else {
//     num = 1;
//   }
//   order.textContent = num;
// };

// button.addEventListener("click", userNum);

const game = () => {
  let orderValue = Number(num); //n번째 참가자의 n
  let inputWord = document.getElementById("input").value; //input창에 입력되는 단어
  let i = 1;
  let wordsLength = words.length;
  let preWord = words[words.length - 1];


  if (regex.test(inputWord) == true) {
    if (num < number) {
      if (wordsLength === 0) {
        num++;
      } else {
        if (preWord.substr(-1) == inputWord.substr(0, 1)) {
          num++;
        } else {
          num = 1;
        }
      }
    } else {
      num = 1;
    }
  } else {
    i++;
    if (i > 3) {
      num = 1;
    }
  }
  order.textContent = num;



  if (regex.test(inputWord) == false) {
    alert(`단어를 다시 입력하세요 ${i++} / 3`);
    input.value = "";
    if (i > 3) {
      alert("값을 잘못 입력하셨습니다. 게임이 끝났습니다.")
    }
  } else {
    if (wordsLength === 0) { //아무런 단어도 아직 받지 않았을 때
      word.append(inputWord + "-"); //? append() -> 컨텐츠를 선택된 요소 내부의 끝 부분에서 삽입
      words.push(inputWord); //? 배열에 단어 추가
    } else { //이미 단어를 받은 후라면
      if (preWord.substr(-1) == inputWord.substr(0, 1)) {
        word.append(inputWord + "-");
        words.push(inputWord);
      } else {
        alert("단어를 잘못 입력하셨습니다. 게임이 끝났습니다")
        word.textContent = "";
      }
    }
    input.value = ""; //input창 초기화
  }
};

button.addEventListener("click", game);