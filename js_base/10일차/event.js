const like = document.querySelector(".like");
const number = document.querySelector(".number");
let num = 0; //전역함수로 해야함



// like.addEventListener("click", () => {
//     number.innerText = num;
//     num++;
// });

const clickHandler = () => {
    number.innerText = num;
    num++;
}

like.addEventListener("click", clickHandler); //clickHandler() => 로하면 클릭하기 전에 실행하라는 뜻, 그러므로 () 제외하고 써야 함












