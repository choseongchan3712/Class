const contents = document.querySelectorAll(".con");


contents.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("active");
    });
});










