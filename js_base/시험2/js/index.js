const userInfo = [
  {
    id: 1,
    userName: "user_1",
    userProfile:
      "https://cdn.pixabay.com/photo/2023/04/04/14/42/otter-7899480_640.jpg",
  },
  {
    id: 2,
    userName: "user_2",
    userProfile:
      "https://cdn.pixabay.com/photo/2022/09/02/11/27/otter-7427340_640.jpg",
  },
  {
    id: 3,
    userName: "user_3",
    userProfile:
      "https://cdn.pixabay.com/photo/2023/04/26/17/43/otter-7953030_640.jpg",
  },
  {
    id: 4,
    userName: "user_4",
    userProfile:
      "https://cdn.pixabay.com/photo/2023/03/21/20/01/otter-7868090_640.jpg",
  },
  {
    id: 5,
    userName: "user_5",
    userProfile:
      "https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_640.jpg",
  },
  {
    id: 6,
    userName: "user_6",
    userProfile:
      "https://cdn.pixabay.com/photo/2014/06/09/12/29/otter-365370_640.jpg",
  },
  {
    id: 7,
    userName: "user_7",
    userProfile:
      "https://cdn.pixabay.com/photo/2016/06/05/22/45/otter-1438381_640.jpg",
  },
  {
    id: 8,
    userName: "user_8",
    userProfile:
      "https://cdn.pixabay.com/photo/2023/04/04/14/42/otter-7899480_640.jpg",
  },
  {
    id: 9,
    userName: "user_9",
    userProfile:
      "https://cdn.pixabay.com/photo/2022/08/27/12/20/otter-7414367_640.jpg",
  },
  {
    id: 10,
    userName: "user_10",
    userProfile:
      "https://cdn.pixabay.com/photo/2022/09/02/11/26/otter-7427338_640.jpg",
  },
  {
    id: 11,
    userName: "user_11",
    userProfile:
      "https://cdn.pixabay.com/photo/2022/09/02/11/26/otter-7427337_640.jpg",
  },
  {
    id: 12,
    userName: "user_12",
    userProfile:
      "https://cdn.pixabay.com/photo/2018/03/02/22/27/sea-otter-3194446_640.jpg",
  },
  {
    id: 13,
    userName: "user_13",
    userProfile:
      "https://cdn.pixabay.com/photo/2017/03/15/12/43/clawed-otter-2146072_640.jpg",
  },
];

const post = [
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2015/05/22/18/20/otter-779458_640.jpg",
  },
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2024/02/17/15/14/otter-8579539_640.jpg",
  },
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2021/07/08/09/43/otter-6396410_640.jpg",
  },
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2016/06/05/22/42/otter-1438378_640.jpg",
  },
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2017/08/17/19/07/zoo-2652488_640.jpg",
  },
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2017/08/24/23/46/otter-2678776_640.jpg",
  },
  {
    contentsImg:
      "https://cdn.pixabay.com/photo/2018/02/27/14/59/otter-3185672_640.jpg",
  },
];

const myInfo = {
  id: 1,
  userName: "user_1",
  userProfile:
    "https://cdn.pixabay.com/photo/2023/04/04/14/42/otter-7899480_640.jpg",
};

const wrapEl = document.querySelector(".wrap");
const contentsWrapEl = document.querySelector(".contents_wrap");
const sideEl = document.querySelector(".side");
const swiperWrapperEl = document.querySelector(".swiper-wrapper");

const createReels = (i) => {
  const swiperSlideEl = document.createElement("div");
  swiperSlideEl.classList.add("swiper-slide");
  swiperSlideEl.innerHTML = `
  <img src="${userInfo[i].userProfile}" alt="img">
  <div class="user_id">${userInfo[i].userName}</div>
  `;
  swiperWrapperEl.append(swiperSlideEl);
};

for (i = 0; i < userInfo.length; i++) {
  createReels(i);
}

const createContents = (i) => {
  const contentsEl = document.createElement("div");
  contentsEl.classList.add("contents");

  const infoEl = document.createElement("div");
  infoEl.classList.add("info");

  const infoProfileEl = document.createElement("div");
  infoProfileEl.classList.add("info_profile");
  infoProfileEl.innerHTML = `<img src="${userInfo[i].userProfile}" alt="profile_img">`;

  const userNameEl = document.createElement("div");
  userNameEl.classList.add("user_name");
  userNameEl.innerText = `${userInfo[i].userName}`;

  infoEl.append(infoProfileEl);
  infoEl.append(userNameEl);

  const contentsImgEl = document.createElement("div");
  contentsImgEl.classList.add("contents_img");
  contentsImgEl.innerHTML = `<img src="${post[i].contentsImg}" alt="contents_img">`;

  const iconWrapEl = document.createElement("div");
  iconWrapEl.classList.add("icon_wrap");

  const iconsEl = document.createElement("div");
  iconsEl.classList.add("icons");
  iconsEl.innerHTML = `
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-comment"></i>
  <i class="fa-regular fa-paper-plane"></i>
  `;

  const saveEl = document.createElement("div");
  saveEl.classList.add("save");
  saveEl.innerHTML = `<i class="fa-regular fa-bookmark"></i>`;

  iconWrapEl.append(iconsEl);
  iconWrapEl.append(saveEl);

  const commentWrapEl = document.createElement("div");
  commentWrapEl.classList.add("comment_wrap");

  const commentBoxEl = document.createElement("div");
  commentBoxEl.classList.add("comment_box");

  const imgBoxEl = document.createElement("div");
  imgBoxEl.classList.add("img_box");
  imgBoxEl.innerHTML = `<img src="${post[i].contentsImg}" alt="contents_img">`;

  const commentRightWrapEl = document.createElement("div");
  commentRightWrapEl.classList.add("comment_right_wrap");

  const commentInfoEl = document.createElement("div");
  commentInfoEl.classList.add("comment_info");

  const commentProfileEl = document.createElement("div");
  commentProfileEl.classList.add("comment_profile");
  commentProfileEl.innerHTML = `<img src="${userInfo[i].userProfile}" alt="profile_img">`;

  const commentUserNameEl = document.createElement("div");
  commentUserNameEl.classList.add("comment_user_name");
  commentUserNameEl.innerText = `${userInfo[i].userName}`;

  commentInfoEl.append(commentProfileEl);
  commentInfoEl.append(commentUserNameEl);

  const commentDetailEl = document.createElement("div");
  commentDetailEl.classList.add("comment_detail");

  const commentScrollEl = document.createElement("div");
  commentScrollEl.classList.add("comment_scroll");

  commentDetailEl.append(commentScrollEl);

  const commentInputBoxEl = document.createElement("div");
  commentInputBoxEl.classList.add("comment_input_box");

  const commentFormEl = document.createElement("form");
  commentFormEl.classList.add("comment_form");
  commentFormEl.innerHTML = `
  <input type="text" placeholder="댓글 달기..." class="comment_input" value="">
  <button>게시</button>
  `;

  commentInputBoxEl.append(commentFormEl);

  commentRightWrapEl.append(commentInfoEl);
  commentRightWrapEl.append(commentDetailEl);
  commentRightWrapEl.append(commentInputBoxEl);
  commentBoxEl.append(imgBoxEl);
  commentBoxEl.append(commentRightWrapEl);

  commentWrapEl.append(commentBoxEl);

  contentsEl.append(infoEl);
  contentsEl.append(contentsImgEl);
  contentsEl.append(iconWrapEl);
  contentsEl.append(commentWrapEl);

  contentsWrapEl.append(contentsEl);
};

for (i = 0; i < post.length; i++) {
  createContents(i);
}

const commemtIconCilckHandler = (e) => {
  if (e.target.classList.contains("fa-comment")) {
    const commentWrapEl =
      e.target.parentNode.parentNode.parentNode.querySelector(".comment_wrap");
    commentWrapEl.classList.add("active");
    sideEl.style.zIndex = "0";
  } else if (
    e.target.classList.contains("comment_wrap") &&
    !e.target.classList.contains("comment_box")
  ) {
    const commentWrapEl = e.target;
    commentWrapEl.classList.remove("active");
    sideEl.style.zIndex = "1";
  }
};

contentsWrapEl.addEventListener("click", commemtIconCilckHandler);

const commentHandler = (e) => {
  if (e.target.classList.contains("comment_form")) {
    e.preventDefault();
    const commentForm = e.target;
    const commentInput = e.target.querySelector(".comment_input");
    const commentValue = commentInput.value;
    const commentScrollEl =
      e.target.parentNode.parentNode.querySelector(".comment_scroll");
    const commentContents = document.createElement("div");
    commentContents.classList.add("comment_contents");

    const commentUserInfo = document.createElement("div");
    commentUserInfo.classList.add("comment_user_info");

    const commentUserProfile = document.createElement("div");
    commentUserProfile.classList.add("comment_user_profile");
    commentUserProfile.innerHTML = `<img src="${myInfo.userProfile}" alt="comment_user_profile">`;

    const commentUserId = document.createElement("div");
    commentUserId.innerText = `${myInfo.userName}`;

    commentUserInfo.append(commentUserProfile);
    commentUserInfo.append(commentUserId);

    const commentDetailText = document.createElement("div");
    commentDetailText.classList.add("comment_detail_text");
    commentDetailText.innerText = commentValue;

    const someActions = document.createElement("div");
    someActions.classList.add("some_actions");

    const replyEl = document.createElement("div");
    replyEl.classList.add("reply");
    replyEl.innerText = "댓글달기";

    const deleteEl = document.createElement("div");
    deleteEl.classList.add("delete");
    deleteEl.innerText = "삭제하기";

    someActions.append(replyEl);
    someActions.append(deleteEl);

    commentContents.append(commentUserInfo);
    commentContents.append(commentDetailText);
    commentContents.append(someActions);

    commentScrollEl.append(commentContents);
    commentForm.reset();
  }
};

contentsWrapEl.addEventListener("submit", commentHandler);

const replyHandler = (e) => {
  if (e.target.classList.contains("reply")) {
    const commentInput =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(
        ".comment_input"
      );
    const toReplyUser = e.target.parentNode.parentNode.querySelector(
      ".comment_user_info div:nth-child(2)"
    ).innerText;
    commentInput.value = `@${toReplyUser} `;
  }
};

contentsWrapEl.addEventListener("click", replyHandler);

const deleteHandler = (e) => {
  if (e.target.classList.contains("delete")) {
    const commentContent = e.target.parentNode.parentNode;
    commentContent.remove();
  }
};

contentsWrapEl.addEventListener("click", deleteHandler);

const likeHandler = (e) => {
  if (e.target.classList.contains("fa-heart")) {
    const likeEl = e.target;
    likeEl.classList.toggle("active");
  }
};

contentsWrapEl.addEventListener("click", likeHandler);

// const lookMoreHandler = (e) => {
//   if(e.target.classList.contains('look_more') || e.target.classList.contains('fa-bars') || e.target.classList.contains('look_more_text')) {
//     const darkWrapEl = document.querySelector('.dark_wrap');
//     darkWrapEl.classList.toggle('active');
//   }
// }

// wrapEl.addEventListener("click", lookMoreHandler)

const isDark = localStorage.getItem("DARK_MODE");

const toggleHandler = (e) => {
  if (
    e.target.classList.contains("toggle") ||
    e.target.classList.contains("circle")
  ) {
    const isDark = localStorage.getItem("DARK_MODE");
    const toggleEl = document.querySelector(".toggle");
    toggleEl.classList.toggle("active");
    if (isDark === "off" || isDark === null) {
      localStorage.setItem("DARK_MODE", "on");
      wrapEl.classList.add("active");
    } else if (isDark === "on") {
      localStorage.setItem("DARK_MODE", "off");
      wrapEl.classList.remove("active");
    }
  }
};

if (isDark === "off" || isDark === null) {
  document.querySelector(".toggle").classList.remove("active");
  wrapEl.classList.remove("active");
} else if (isDark === "on") {
  document.querySelector(".toggle").classList.add("active");
  wrapEl.classList.add("active");
}

wrapEl.addEventListener("click", toggleHandler);

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
