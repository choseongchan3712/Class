let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
let saveNum1;
let saveNum2;

num1.addEventListener("input", () => {
    saveNum1 = num1.value;
});

num2.addEventListener("input", () => {
    saveNum2 = num2.value;
});

btn.addEventListener("click", () => {
    if(Number(saveNum1) > Number(saveNum2)) {
        result.textContent = "첫번째 숫자가 더 큽니다.";
    } else if (Number(saveNum1) < Number(saveNum2)) {
        result.textContent = "두번째 숫자가 더 큽니다."
    } else if (Number(saveNum1) === Number(saveNum2)) {
        result.textContent = "두 숫자가 같습니다.";
    } else {
        result.textContent = "숫자를 적으시오";
    }
})