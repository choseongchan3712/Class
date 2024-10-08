const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const titleEl = document.querySelector('.title');
const descEl = document.querySelector('.desc');
const imgEl = document.querySelector('.img');


// const num = [1, 2, 3, 4, 5];

// const result = num.filter((a) => {
//     return a === 4;
// }); // 배열 반환

// console.log(result);

const movies = [
    {
        id: 0,
        title: "대도시의 사랑법",
        desc: "영화내용: 모두의 관심을 한 몸에 받는 자유로운 영혼 재희.",
        img: 'https://img.megabox.co.kr/SharedImg/2024/09/19/vXyJ3KKvUIHfhPkSZWFVus53O7Z8Zxpn_420.jpg'
    },
    {
        id: 1,
        title: "베테랑2",
        desc: "영화내용: 어느 날, 한 교수의 죽음이 이전에 발생했던 살인 사건들과 연관성이 있는 것으로...",
        img: 'https://img.megabox.co.kr/SharedImg/2024/08/26/OFEIHJBOoUQ2UV1XAxo44BpFMrUBKigc_420.jpg',
    },
    {
        id: 2,
        title: "조커",
        desc: " 영화내용: 세상이란 무대에서 폭주하기 시작한 ‘조커’와 ‘할리 퀸’을 확인하라!",
        img: 'https://img.megabox.co.kr/SharedImg/2024/09/19/rtwcztWJCTnUvP3kYLHtLd40lzDWhKK7_420.jpg',
    },
];


submitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputEl.value;
    const search = movies.filter((e) => e.title === inputValue);
    if (search.length === 0) {
        titleEl.innerText = `${inputValue}에 관한 검색 결과가 없습니다.`
        descEl.innerText = '';
        imgEl.innerHTML = ``;
    } else {
        titleEl.innerText = search[0].title;
        descEl.innerText = search[0].desc;
        imgEl.innerHTML = `<img src="${search[0].img}" alt="img">`;
    }
    
}

formEl.addEventListener("submit", submitHandler);



















