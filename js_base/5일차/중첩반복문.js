//중첩반복문
//부모 반복문이 한번 출력되면 자식 반복문이 전체 순회함

// for (let i = 0; i < 4; i++) {
//     document.write(`<h3>${i}</h3>`)
//     for (let o = 4; o < 7; o++) {
//         document.write(o);
//     }
// }

for (i = 1; i < 10; i++) {
    document.write(`<h1>${i}단</h1>`);
    for (j = 1; j < 10; j++) {
        document.write(`${i} X ${j} = ${i * j} <br>`);
    }
}


























