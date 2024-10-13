// swiper
var menuButton = document.querySelector('.menu-button');
    var openMenu = function () {
      swiper.slidePrev();
    };
    var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
            // required because of slideToClickedSlide
            menuButton.removeEventListener('click', openMenu, true);
          } else {
            menuButton.classList.remove('cross');
          }
        },
        slideChangeTransitionEnd: function () {
          var slider = this;
          if (slider.activeIndex === 1) {
            menuButton.addEventListener('click', openMenu, true);
          }
        },
      },
    });
//swiper

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
  
];

const myInfo = {
  id: 1,
  userProfile: 'https://cdn.pixabay.com/photo/2023/03/21/20/01/otter-7868090_640.jpg',
  userProfileAlt: 'profile_img',
  contentsImg: 'https://cdn.pixabay.com/photo/2022/11/22/13/21/otter-7609666_640.jpg',
  contentsImgAlt: 'contents_img'
};

const addUserList = (i) => {
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

  const commentEl = document.createElement('div');
  commentEl.classList.add('comment');
  commentEl.innerHTML = '<i class="fa-regular fa-comment"></i>';
  likeEl.append(commentEl);

  const formEl = document.createElement('form');
  formEl.classList.add('form');
  formEl.innerHTML = '<input type="text" class="comment_input" placeholder="댓글을 작성하시오">';
  contentsEl.append(formEl);
  formEl.style.display = "none";

  const submitButtonEl = document.createElement('button');
  submitButtonEl.classList.add('submit_button');
  submitButtonEl.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
  formEl.append(submitButtonEl);
}

for (i = 0; i < userList.length; i++) {
  addUserList(i);
}

containerEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
      e.target.classList.toggle('active');

      if (e.target.classList.contains('active')) {
        e.target.parentNode.querySelector('.count').innerText = 0;
        e.target.parentNode.querySelector('.count').innerText++;
      } else {
        e.target.parentNode.querySelector('.count').innerText = 0;
      }
  }

  if (e.target.classList.contains('fa-comment')) {
    e.target.classList.toggle('create_form');
    
    if (e.target.classList.contains('create_form')) {
      const contentsEl = e.target.parentNode.parentNode.parentNode;
      const formEl = contentsEl.querySelector('form');
      formEl.style.display = "flex";
    } else {
      const contentsEl = e.target.parentNode.parentNode.parentNode;
      const formEl = contentsEl.querySelector('form');
      formEl.style.display = "none";
    }
  }
});

containerEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('form')) {
    const contentsEl = e.target.parentNode;
    const commentValue = e.target.querySelector('input').value;
    if (commentValue) {
      const commentBox = document.createElement('div');
      commentBox.classList.add('comment_box');

      const commentIconEl = document.createElement('div');
      commentIconEl.classList.add('comment_icon');

      const profileEl = document.createElement('div');
      profileEl.classList.add('profile');
      profileEl.innerHTML = `<img src="${myInfo.userProfile}" alt="${myInfo.userProfileAlt}">`;
      commentIconEl.append(profileEl);

      const userIdEl = document.createElement('div');
      userIdEl.classList.add('user_id');
      userIdEl.innerHTML = `user ${myInfo.id}`;
      commentIconEl.append(userIdEl);
      
      const deleteEl = document.createElement('div');
      deleteEl.classList.add('delete_button');
      deleteEl.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      commentIconEl.append(deleteEl);
      deleteEl.addEventListener("click", (event) => {
        const commentEl = event.target.parentNode.parentNode.parentNode;
        commentEl.remove();
      })

      const commentText = document.createElement('div');
      commentText.innerHTML = `<div class="comment_value">↳ ${commentValue}</div> <div class="reply">댓글달기</div>`;
      contentsEl.addEventListener("click", (event) => {
        if(event.target.classList.contains('reply')) {
          const contentsBox = event.target.parentNode.parentNode;

          const replyFormEl = document.createElement('form');
          replyFormEl.classList.add('reply_form');
          replyFormEl.innerHTML = '<input type="text" class="reply_input" placeholder="댓글을 작성하시오">';

          const replyButtonEl = document.createElement('button');
          replyButtonEl.classList.add('reply_button');
          replyButtonEl.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';

          replyFormEl.append(replyButtonEl);
          contentsBox.append(replyFormEl);
        }
      })
      
      commentBox.append(commentIconEl);
      commentBox.append(commentText);
      contentsEl.append(commentBox);
      e.target.style.display = "none";
      e.target.reset();
      const iconEl = e.target.parentNode.querySelector('.fa-comment');
      iconEl.classList.remove('create_form');
    }
  }

  if (e.target.classList.contains('reply_form')) {
    const commentBoxEl = e.target.parentNode;
    const replyValue = e.target.querySelector('.reply_input').value;

    if (replyValue) {
      const commentBox = document.createElement('div');
      commentBox.classList.add('comment_box');

      const commentIconEl = document.createElement('div');
      commentIconEl.classList.add('comment_icon');

      const profileEl = document.createElement('div');
      profileEl.classList.add('profile');
      profileEl.innerHTML = `<img src="${myInfo.userProfile}" alt="${myInfo.userProfileAlt}">`;
      commentIconEl.append(profileEl);

      const userIdEl = document.createElement('div');
      userIdEl.classList.add('user_id');
      userIdEl.innerHTML = `user ${myInfo.id}`;
      commentIconEl.append(userIdEl);
      
      const deleteEl = document.createElement('div');
      deleteEl.classList.add('delete_button');
      deleteEl.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      commentIconEl.append(deleteEl);
      deleteEl.addEventListener("click", (event) => {
        const commentEl = event.target.parentNode.parentNode.parentNode;
        commentEl.remove();
      })

      const commentText = document.createElement('div');
      commentText.innerHTML = `<div class="comment_value">↳ ${replyValue}</div>`;
      
      commentBox.append(commentIconEl);
      commentBox.append(commentText);
      commentBoxEl.append(commentBox);
      e.target.style.display = "none";
      e.target.reset();
    }
  }
});

