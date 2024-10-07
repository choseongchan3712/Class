const boxEl = document.querySelector('.box');

console.log(`top: ${boxEl.offsetTop}`);
console.log(`left: ${boxEl.offsetLeft}`);

console.log(`width값: ${boxEl.offsetWidth}`);
console.log(`height값: ${boxEl.offsetHeight}`);

console.log(`브라우저 높이값: ${window.innerHeight}`);
console.log(`브라우저 가로값: ${window.innerWidth}`);

console.log(`화면과 브라우저 거리: ${window.pageYOffset}`);