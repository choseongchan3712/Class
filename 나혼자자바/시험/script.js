const containerEl = document.querySelector('.container');

const userList = [
    {
        id: 1,
        userProfile: 'https://cdn.pixabay.com/photo/2023/03/21/20/01/otter-7868090_640.jpg',
        userProfileAlt: 'profile_img',
        contentsImg: 'https://cdn.pixabay.com/photo/2022/11/22/13/21/otter-7609666_640.jpg',
        contentsImgAlt: 'contents_img'
    },
    {
        id: 2,
        userProfile: 'https://cdn.pixabay.com/photo/2024/04/23/02/43/ai-generated-8713812_640.png',
        userProfileAlt: 'profile_img',
        contentsImg: 'https://cdn.pixabay.com/photo/2022/08/27/12/20/otter-7414367_640.jpg',
        contentsImgAlt: 'contents_img'
    },
    {
        id: 3,
        userProfile: 'https://cdn.pixabay.com/photo/2018/03/02/22/27/sea-otter-3194446_640.jpg',
        userProfileAlt: 'profile_img',
        contentsImg: 'https://cdn.pixabay.com/photo/2014/06/01/11/34/otter-359539_640.jpg',
        contentsImgAlt: 'contents_img'
    },
    
]

const addUserList = () => {
    const contentsEl = document.createElement('div');
    contentsEl.classList.add('contents');
    containerEl.append(contentsEl);

    const userEl = document.createElement('div');
    userEl.classList.add('user');
    contentsEl.append(userEl);

    const profileEl = document.createElement('div');
    profileEl.classList.add('profile');
    profileEl.innerHTML = `<img src="${userList[i].userProfile}" alt="${userList[i].userProfileAlt}">`;
    userEl.append(profileEl);

    const userIdEl = document.createElement('div');
    userIdEl.classList.add('user_id');
    userIdEl.innerHTML = `user ${userList[i].id}`;
    userEl.append(userIdEl);
    
    const contentsImgEl = document.createElement('div');
    contentsImgEl.classList.add('contents_img');
    contentsEl.append(contentsImgEl);
    contentsImgEl.innerHTML = `<img src="${userList[i].contentsImg}" alt="${userList[i].contentsImgAlt}">`;

    const likeEl = document.createElement('div');
    likeEl.classList.add('like');
    contentsEl.append(likeEl);
    likeEl.innerHTML = '<i class="fa-regular fa-heart"></i>';

    const countEl = document.createElement('div');
    countEl.classList.add('count');
    countEl.innerHTML = 0;
    likeEl.append(countEl);
}

for (i = 0; i < userList.length; i++) {
    addUserList();
}

containerEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-heart')) {
        e.target.classList.add('active');
        e.target.parentNode.querySelector('.count').innerText++;
    }
})
