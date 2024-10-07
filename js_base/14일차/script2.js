const boxEl = document.querySelector('.box');


const scrollHandler = () => {
    const pageY = pageYOffset;
    boxEl.style.transform = `translate(-50%, -50%) rotate(${pageY}deg) `;
}

window.addEventListener("scroll", scrollHandler);