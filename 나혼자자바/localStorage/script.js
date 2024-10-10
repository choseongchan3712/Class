const btnEl = document.querySelector('button');
const wrapEl = document.querySelector('.wrap');


const isDark = localStorage.getItem("DARK_MODE");

const clickHandler = () => {
  const isDark = localStorage.getItem("DARK_MODE");
  if (isDark === "off" || isDark === null) {
    localStorage.setItem("DARK_MODE", "on");
    wrapEl.classList.add('active');
    btnEl.innerHTML = '<button>light</button>'
  } else if (isDark === "on") {
    localStorage.setItem("DARK_MODE", "off");
    wrapEl.classList.remove('active');
    btnEl.innerHTML = '<button>dark</button>'
  }
}

if (isDark === "off" || isDark === null) {
  wrapEl.classList.remove('active');
  btnEl.innerHTML = '<button>light</button>'
} else if (isDark === "on") {
  wrapEl.classList.add('active');
  btnEl.innerHTML = '<button>dark</button>'
}

btnEl.addEventListener("click", clickHandler);