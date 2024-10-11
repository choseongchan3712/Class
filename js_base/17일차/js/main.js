// 변수의 범위
// 1. 전역변수: 전체 영역에서 사용 가능
// 2. 지역변수: 각 함수 내부에서만 사용 가능

// 5f955d61647b0903b6769ed0c940339e



const weather = (pos) => {
    const API_KEY = '5f955d61647b0903b6769ed0c940339e';
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    const tempEl = document.querySelector('.temp span');
    const cityEl = document.querySelector('.city span');

    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);
        tempEl.innerText = data.main.temp;
        cityEl.innerText = data.name;
    });
}


navigator.geolocation.getCurrentPosition(weather);















