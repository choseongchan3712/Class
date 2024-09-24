const body = document.querySelector('body');

for (i = 0; i < 10; i++) {
    body.append(document.createElement('div'));
}

const div = document.querySelectorAll('div');

for (i = 0; i < div.length; i++) {
    div[i].innerHTML= `<h3>${i + 1}</h3>`;
};

