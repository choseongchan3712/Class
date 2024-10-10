// localStorage => 브라우저의 정보를 저장할 수 있음
// => 간단한 내용만 저장. 노출되면 안되는 정보는 저장해서는 안됨.


const buttonEl = document.querySelector('button');


localStorage.setItem("name", "자바");
// => 로컬스토리지에 데이터를 저장 (key, value)

const getName = localStorage.getItem("name");
// => 로컬스토리지에 저장된 값을 가져오기.
// => 가져올 때는 키값으로 가져오기

document.write(getName);

const clickHandler = () => {
    localStorage.removeItem("name");
    window.location.reload();
    // => 페이지를 세로고침
};

buttonEl.addEventListener("click", clickHandler);