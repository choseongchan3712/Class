const conWrapE1 = document.querySelector('.con_wrap');

const clickHandler = (e) => {
    // if (e.target.classList[0] === 'con_wrap'){
    //     e.target.classList.add('');
    // } else {
    //     e.target.classList.toggle('active');
    // }
    if (e.target.classList.contains('con')) {
        e.target.classList.toggle('active');
    }
}
//  이벤트 위임: 부모에게 이벤트 적용 -> 자식이 필요하면 이벤트가 생김.

conWrapE1.addEventListener('click', clickHandler);

// const width = Number(window.innerWidth);
// const height = Number(window.innerHeight);
// const degY = 10 / (width / 2);
// const degX = 10 / (height / 2);

// const move = (e) => {
//     if (e.clientX > (width / 2) && e.clientY > (height / 2)) {
//       conWrapE1.style.transform = `rotateY(${(e.clientX - (width / 2)) * degY}deg) rotateX(-${(e.clientY - (height / 2)) * degX}deg)`;
//     } else if (e.clientX > (width / 2) && e.clientY < (height / 2)) {
//       conWrapE1.style.transform = `rotateY(${(e.clientX - (width / 2)) * degY}deg) rotateX(${((height / 2) - e.clientY) * degX}deg)`;
//     } else if (e.clientX <= (width / 2) && e.clientY > (height / 2)) {
//       conWrapE1.style.transform = `rotateY(-${((width / 2) - e.clientX) * degY}deg) rotateX(-${(e.clientY - (height / 2)) * degX}deg)`;
//     } else if (e.clientX <= (width / 2) && e.clientY < (height / 2)) {
//       conWrapE1.style.transform = `rotateY(-${((width / 2) - e.clientX) * degY}deg) rotateX(${((height / 2) - e.clientY) * degX}deg)`;
//     } 
//   }

// window.addEventListener('mousemove', move);