const wrapEl = document.querySelector('.wrap');
const colorWrap = document.querySelector('.color_wrap');
const box = document.querySelectorAll('.box');



const clickHandler = (e) => {
    if(e.target.classList.contains('box')) {
        e.target.classList.toggle('active');
    }
};

colorWrap.addEventListener('click', clickHandler);

const toggleEl = document.querySelector('.toggle');
const circleEl = document.querySelector('.circle');

const move = (e) => {
    if(e.target.classList.contains('circle')) {
        e.target.parentNode.classList.toggle('toggle_active');
        wrapEl.classList.toggle('wrap_active');
    }
};

toggleEl.addEventListener('click', move);