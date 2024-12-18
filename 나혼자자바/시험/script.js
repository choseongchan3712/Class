const containerEl = document.querySelector(".container");
const hamBtn = document.querySelector(".fa-bars");
const sideMenu = document.querySelector(".side_menu");
const closeBtn = document.querySelector(".fa-xmark");

hamBtn.addEventListener("click", () => {
  sideMenu.classList.add("menu_active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("menu_active");
});

// const userList = [
//     {
//         id: 1,
//         userProfile: 'https://cdn.pixabay.com/photo/2023/03/21/20/01/otter-7868090_640.jpg',
//         userProfileAlt: 'profile_img',
//         contentsImg: 'https://cdn.pixabay.com/photo/2022/11/22/13/21/otter-7609666_640.jpg',
//         contentsImgAlt: 'contents_img'
//     },
//     {
//         id: 2,
//         userProfile: 'https://cdn.pixabay.com/photo/2024/04/23/02/43/ai-generated-8713812_640.png',
//         userProfileAlt: 'profile_img',
//         contentsImg: 'https://cdn.pixabay.com/photo/2022/08/27/12/20/otter-7414367_640.jpg',
//         contentsImgAlt: 'contents_img'
//     },
//     {
//         id: 3,
//         userProfile: 'https://cdn.pixabay.com/photo/2018/03/02/22/27/sea-otter-3194446_640.jpg',
//         userProfileAlt: 'profile_img',
//         contentsImg: 'https://cdn.pixabay.com/photo/2014/06/01/11/34/otter-359539_640.jpg',
//         contentsImgAlt: 'contents_img'
//     },

// ]

// const addUserList = (i) => {
//     const contentsEl = document.createElement('div');
//     contentsEl.classList.add('contents');
//     containerEl.append(contentsEl);

//     const userEl = document.createElement('div');
//     userEl.classList.add('user');
//     contentsEl.append(userEl);

//     const profileEl = document.createElement('div');
//     profileEl.classList.add('profile');
//     profileEl.innerHTML = `<img src="${userList[i].userProfile}" alt="${userList[i].userProfileAlt}">`;
//     userEl.append(profileEl);

//     const userIdEl = document.createElement('div');
//     userIdEl.classList.add('user_id');
//     userIdEl.innerHTML = `user ${userList[i].id}`;
//     userEl.append(userIdEl);

//     const contentsImgEl = document.createElement('div');
//     contentsImgEl.classList.add('contents_img');
//     contentsEl.append(contentsImgEl);
//     contentsImgEl.innerHTML = `<img src="${userList[i].contentsImg}" alt="${userList[i].contentsImgAlt}">`;

//     const likeEl = document.createElement('div');
//     likeEl.classList.add('like');
//     contentsEl.append(likeEl);
//     likeEl.innerHTML = '<i class="fa-regular fa-heart"></i>';

//     const countEl = document.createElement('div');
//     countEl.classList.add('count');
//     countEl.innerHTML = 0;
//     likeEl.append(countEl);
// }

// for (i = 0; i < userList.length; i++) {
//     addUserList(i);
// }

const countActive = document.querySelector(".count_active");

containerEl.addEventListener("click", (e) => {
if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("active");
    // e.target.classList.add('active');
    e.target.parentNode.querySelector(".count").innerText = 0;
    e.target.parentNode
    .querySelector(".count")
    .classList.toggle("count_active");
    e.target.parentNode.querySelector(".count_active").innerText++;
    // e.target.parentNode.querySelector('.count').innerText++;
}
});

const bodyEl = document.querySelector("body");
// const commentsEl = document.querySelector('.comments');
// const commentArea = document.querySelector(".comment_area");

const submitHandler = (e) => {
  // commentsEl.innerText = `${commentInput.value}`;

if (e.target.classList.contains("comment_from")) {
    e.preventDefault();
    const commentInput = e.target.querySelector(".comment_input");

    const commentsEl = document.createElement("div");
    //# 가상의 공간에 div 만들어 놓는다.

    commentsEl.classList.add("comments");
    //# 만들어 놓은 div에 클래스명을 지어준다.

    commentsEl.innerText = `댓글: ${commentInput.value}`;
    //# 만들어 놓은 div에 댓글 값을 넣는다.

    const commentAreaEl = e.target.parentNode.querySelector('.comment_area');
    //# 형제 태그를 선택하는 방법을 안 배워서, 먼저 부모를 선택하고
    //# 부모에서 클래스 선택자로 comment_area 를 선텍함

    commentAreaEl.append(commentsEl);
    //# 만들어 놓은 div를 html에 지정한 공간에 넣어 준다.
}
};

bodyEl.addEventListener("submit", submitHandler);


const clickHandler = (e) => {
    if (e.target.classList.contains('comments')) {
        const commentsEl = e.target;
        commentsEl.remove();
    }
}

bodyEl.addEventListener("click", clickHandler);
