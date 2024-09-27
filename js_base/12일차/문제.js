

const clockEl = document.querySelector('.clock');

const timerHandler = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    // 위에코드들이 핸들러 안 쪽에 있어야 함
    clockEl.innerText = `${hour}:${min}:${sec}`;
}

// String()=> 숫자 타입을 문자 타입으로 변경
// padStart(개수, 값) => 문자 타입만 사용 가능. 이 문자열의 시작 부분에 다른 문자열을 채움.

timerHandler();

setInterval(timerHandler, 1000);
