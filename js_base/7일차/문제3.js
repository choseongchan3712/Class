const id = document.querySelector(".id");
const passWord = document.querySelector(".password");
const button = document.querySelector("button");

const userInfo = {
  id: 0,
  username: "test",
  userpassword: "123456",
};

button.addEventListener("click", () => {
  if (id.value !== userInfo.username) {
    if (id.value === '') {
        alert('아이디를 적으세요');
    } else {
        alert("아이디가 다릅니다.");
    }
  } else if (id.value === userInfo.username && passWord.value !== userInfo.userpassword) {
    if (passWord.value === '') {
        alert('비밀번호를 적으세요');
    } else {
        alert("비밀번호가 다릅니다.");
    }
  } else if (id.value === userInfo.username && passWord.value === userInfo.userpassword) {
    alert("로그인 되었습니다.");
    }
});
