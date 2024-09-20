const wrap = document.querySelector(".wrap");

const user = {
  id: 0,
  username: prompt("이름을 적으시오"),
  userlanguage: prompt("주 언어를 적으시오"),
  userhobby: prompt("취미를 적으시오"),
  intro: function () {
    document.write(`<h2>##출력결과##</h2>`);
    document.write(`<h2>이름: ${this.username}</h2>`);
    document.write(`<h2>주 언어: ${this.userlanguage}</h2>`);
    document.write(`<h2>취미: ${this.userhobby}</h2>`);
  },
};

user.intro();
