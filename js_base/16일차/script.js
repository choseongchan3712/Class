const darkBtnEl = document.querySelector('.dark_btn');
const getDark = localStorage.getItem("DARK_MODE");
const dakrHandler = () => {
    const getDark = localStorage.getItem("DARK_MODE");
    if(getDark === null) {
        localStorage.setItem("DARK_MODE", "on");
        document.body.classList.add("dark_active");
        darkBtnEl.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    } else if (getDark === "on"){
        localStorage.removeItem("DARK_MODE", "on");
        document.body.classList.remove("dark_active");
        darkBtnEl.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
};

if (getDark === "on") {
    document.body.classList.add("dark_active");
    darkBtnEl.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
}

darkBtnEl.addEventListener('click', dakrHandler);