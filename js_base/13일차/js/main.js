const users = [
    {
        id: 0,
        avataUrl: "https://cdn.pixabay.com/photo/2023/03/21/20/01/otter-7868090_640.jpg",
        userName: "user 1",
        imgUrl: "https://cdn.pixabay.com/photo/2022/11/22/13/21/otter-7609666_640.jpg"
    },
    {
        id: 1,
        avataUrl: "https://cdn.pixabay.com/photo/2024/04/23/02/43/ai-generated-8713812_640.png",
        userName: "user 2",
        imgUrl: "https://cdn.pixabay.com/photo/2022/08/27/12/20/otter-7414367_640.jpg"
    },
    {
        id: 2,
        avataUrl: "https://cdn.pixabay.com/photo/2018/03/02/22/27/sea-otter-3194446_640.jpg",
        userName: "user 3",
        imgUrl: "https://cdn.pixabay.com/photo/2014/06/01/11/34/otter-359539_640.jpg"
    },
];

const wrapEl = document.querySelector('.wrap');
const avataAll = document.querySelectorAll('.avata');
const usernameAll = document.querySelectorAll('.username');
const bgAll = document.querySelectorAll('.bg');

for (i = 0; i < users.length; i++) {
    avataAll[i].innerHTML = `<img src="${users[i].avataUrl}" alt="avatar">`;
    usernameAll[i].innerHTML = users[i].userName;
    bgAll[i].innerHTML = `<img src="${users[i].imgUrl}">`;
}


const heartHandler = (e) => {
    if(e.target.classList.contains('fa-regular')){
        e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }else if(e.target.classList.contains('fa-solid')){
        e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
};


wrapEl.addEventListener('click', heartHandler);


















