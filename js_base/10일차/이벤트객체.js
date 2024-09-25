const parent = document.querySelector(".parent");

const parentHandler = (e) => {
  //   console.log(e.currentTarget); // currentTarget => 현재 이벤트가 걸려있는 엘리먼트
  console.log(e.target);
  // => 실제 클릭한 엘리먼트를 가져옴
};

parent.addEventListener("click", parentHandler);

const one = document.querySelector(".one");

let startPoint = { x: 0, y: 0 };
let endPoint = { x: 0, y: 0 };

one.addEventListener("mousedown", (e) => {
  endPoint.x = e.clientX - startPoint.x;
  endPoint.y = e.clientY - startPoint.y;
  window.addEventListener("mousemove", () => {
    one.style.transform = `translateX(${endPoint.x} + px)`;
    one.style.transform = `translateY(${endPoint.y} + px)`;
  });
  //   startPoint.x = endPoint.x;
  //   startPoint.y = endPoint.y;
});

// one.addEventListener("mouseup", () => {
//   window.removeEventListener("mousemove", (e) => {
//     e.target.style.transform = `translateX: ${endPoint.x} + px`;
//     e.target.style.transform = `translateY: ${endPoint.y} + px`;
//   });
// });
