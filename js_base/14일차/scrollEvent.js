const headerEl = document.querySelector('header');
const titleEl = document.querySelector('.title');
const secEl_2 = document.querySelector('.section_2')

const handleScroll = () => {
    const pageY = pageYOffset;
    // 스크롤바의 높이 값을 px단위로 알아옴

    const secTop_2 = secEl_2.offsetTop;
    // 엘리먼트의 top값을 px단위로 알아옴

    if (pageY > 300) {
        headerEl.classList.add('header_active');
    } else {
        headerEl.classList.remove('header_active');
    }

    if (pageY > secTop_2 / 2) {
        titleEl.classList.add('title_active');
    } else {
        titleEl.classList.remove('title_active');
    }
};


window.addEventListener('scroll', handleScroll);