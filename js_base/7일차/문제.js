const userInformation = {
    id: 0,
    username: "JavaScript",
    useremail: "java@script.con",
    profileImg: "js.jpg",
    intro: function() {
        document.write(`<h2 class = "text_1">유저 아이디: ${this.username}</h2> <br>`);
        document.write(`<h2 class = "text_2">이메일: ${this.useremail}</h2> <br>`);
        document.write(`<h2 class = "text_3">profileImg: ${this.profileImg}</h2> <br>`);
    }
};

userInformation.intro();

const text1 = document.querySelector('.text_1');
const text2 = document.querySelector('.text_2');
const text3 = document.querySelector('.text_3');

text1.style.cursor = "pointer";
text1.style.display = "inline-block";
text2.style.cursor = "pointer";
text2.style.display = "inline-block";
text3.style.cursor = "pointer";
text3.style.display = "inline-block";

text1.addEventListener("click", () => {
    text1.style.color = "red";
})
text2.addEventListener("click", () => {
    text2.style.color = "green";
})
text3.addEventListener("click", () => {
    text3.style.color = "blue";
})
text1.addEventListener("dblclick", () => {
    text1.style.color = "black";
})
text2.addEventListener("dblclick", () => {
    text2.style.color = "black";
})
text3.addEventListener("dblclick", () => {
    text3.style.color = "black";
})