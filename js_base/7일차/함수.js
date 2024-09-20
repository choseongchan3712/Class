//함수: function

//선언적함수

intro1();

//선언적 함수는 정의한 함수 앞에 호출해도 사용 가능 => 우선순위가 가장 높음

function intro1() {
    document.write('아건 100줄짜리 코드입니다. <br>');
}
intro1();

// 함수는 반드시 호출을 해야 함.



//익명함수
const intro2 = function() {
    document.write('익명함수<br>');
};

intro2();
//익명함수는 선 선언 후 호출 가능. 선 호출 후 선언 불가능.

const intro3 = function(name, age) {
    document.write(`안녕 ${name}. 나이는 ${age}입니다. <br>`)
};
intro3('자바스크립트', 27);
//name 과 age는 매개변수임


//화살표함수

const intro4 = (name, age) => {
    document.write(`이름: ${name} <br>`);
    document.write(`나이: ${age} <br>`);
};

intro4("자바", 27);















