const formEl = document.querySelector('form');
const idEl = document.querySelector('.id');
const passEl = document.querySelector('.password');
const buttonEl = document.querySelector('button');
const errorEl = document.querySelector('.error');




const userInfo = {
    id: 0,
    username: "test",
    password: "123"
}

const submitHandler = (e) => {
    e.preventDefault();
    if (idEl.value !== userInfo.username) {
        errorEl.innerText = ('아이디나 비밀번호가 다릅니다!');
    } else if (idEl.value === userInfo.username && passEl.value !== userInfo.password) {
        errorEl.innerText = ('아이디나 비밀번호가 다릅니다!');
    } else if (idEl.value === userInfo.username && passEl.value === userInfo.password) {
        alert('환영합니다!');
        errorEl.innerText = ('');
    }
}


formEl.addEventListener("submit", submitHandler);