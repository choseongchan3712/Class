

const bgE1 = document.querySelector('.bg');

const bgHandler = () => {
    // bgE1.classList.add('active');
    // bgE1.classList.remove('bg');

    bgE1.classList.toggle('active');

    const result = bgE1.classList.contains('active');
    // 지정한 클래스의 유무에 따라 boolean값으로 반환
    
}

bgE1.addEventListener('click', bgHandler)

