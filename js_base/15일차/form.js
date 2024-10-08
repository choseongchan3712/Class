const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const h2El = document.querySelector('h2');

const submitHandler = (e) => {
    e.preventDefault();
    // => 태그가 가지고 있는 기본 이벤트를 실행하지 않게 합니다.
    const inputValue = inputEl.value;
    // => 인풋 태그의 value 값을 가지고 온다.
    h2El.innerText = `${inputValue}의 검색결과`;
}

formEl.addEventListener("submit", submitHandler);