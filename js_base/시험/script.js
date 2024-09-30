const containerEl = document.querySelector('.container');

const userList = [
    {
        id: 1,
        userProfile: 'https://cdn.pixabay.com/photo/2023/03/21/20/01/otter-7868090_640.jpg" alt="profile_img',
        contentsImg: 'https://cdn.pixabay.com/photo/2022/11/22/13/21/otter-7609666_640.jpg" alt="contents_img'
    }
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
    profileEl.innerHTML = `<img src="${userList[i].userProfile}">`;
    userEl.append(profileEl);

    const userIdEl = document.createElement('div');
    userIdEl.classList.add('user_id');
    userIdEl.innerHTML = `user ${userList[i].id}`;
    userEl.append(userIdEl);
    
    const contentsImgEl = document.createElement('div');
    contentsImgEl.classList.add('contents_img');
    contentsEl.append(contentsImgEl);
    contentsImgEl.innerHTML = `<img src="${userList[i].contentsImg}">`

    const likeEl = document.createElement('div');
    likeEl.classList.add('like');
    contentsEl.append(likeEl);
    likeEl.innerHTML = '<i class="fa-regular fa-heart"></i>';
}

for (i = 0; i < userList.length; i++) {
    addUserList();
}