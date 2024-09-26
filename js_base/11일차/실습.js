const sectionE1 = document.querySelector('section');
const oneBtn = document.querySelectorAll('.one_btn');

const clickHandler = (e) => {
    // if(e.target.classList.contains('toggle_btn')) {
    //     e.target.classList.toggle('active');
    // }
    if (e.target.classList.contains('one_btn')) {
        e.target.parentNode.classList.toggle('active');
        // 클릭한 타겟의 부모 계층으로 이동 함
    }
}

sectionE1.addEventListener('click', clickHandler);