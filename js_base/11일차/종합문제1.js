const menus = [
    {
        id: 0,
        title: "전체",
        url: "#"
    },
    {
        id: 1,
        title: "shorts",
        url: "#"
    },
    {
        id: 2,
        title: "동영상",
        url: "#"
    },
    {
        id: 3,
        title: "시청하지 않음",
        url: "#"
    },
    {
        id: 4,
        title: "감상한 동영상",
        url: "#"
    },
    {
        id: 5,
        title: "최근에 업로드한 동영상",
        url: "#"
    },
    {
        id: 6,
        title: "라이브",
        url: "#"
    },
];

const menuWrapEl = document.querySelector('.menu_wrap');
// const menuEl = document.createElement('div'); // div 테그 제작

// menuEl.classList.add('menu');

// menuEl.innerHTML = `<a href="${menus[0].url}">${menus[0].title}</a>`;

// menuWrapEl.append(menuEl);

for (i = 0; i < menus.length; i++) {
    const menuEl = document.createElement('div');

    menuEl.classList.add('menu');

    menuEl.innerHTML = `<a href="${menus[i].url}">${menus[i].title}</a>`;

    menuWrapEl.append(menuEl);
}



