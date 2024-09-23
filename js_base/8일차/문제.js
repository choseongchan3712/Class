document.write(`<h2>**출력결과**</h2>`);

const arr = [
    person1 = {
        id: 0,
        userName: 'per1',
        userEmail: 'per1@javascript.com',
        userProfile: 'per1.jpg'
    },
    person2 = {
        id: 1,
        userName: 'per2',
        userEmail: 'per2@javascript.com',
        userProfile: 'per2.jpg'
    },
    person3 = {
        id: 2,
        userName: 'per3',
        userEmail: 'per3@javascript.com',
        userProfile: 'per3.jpg'
    },
    person4 = {
        id: 3,
        userName: 'per4',
        userEmail: 'per4@javascript.com',
        userProfile: 'per4.jpg'
    }
]
for (i = 0; i < arr.length ; i++) {
    document.write(`<h2>${i}번째 유저</h2>`)
    document.write(`<h2>아이디: ${arr[i].userName}</h2>`);
    document.write(`<h2>이메일: ${arr[i].userEmail}</h2>`);
    document.write(`<h2>프사: ${arr[i].userProfile}</h2>`);
    document.write(`<h2>--------------------</h2>`);
}



// for (i = 0; i < 4 ; i++) {
//     let arr1 = [
//         person = {
//             id: `${i}`,
//             userName: `js${i}`,
//             userEmail: `js${i}@js.com`,
//             userProfile:`js${i}.jpg`
//         }
//     ];

//     if (i === 0) {
//         document.write(`<h2>${i}번째 유저</h2>`);
//         document.write(`<h2>아이디: js </h2>`);
//         document.write(`<h2>이메일: js@js.com</h2>`);
//         document.write(`<h2>프사: js.jpg</h2>`);
//         document.write(`<h2>--------------------</h2>`);
//     } else {
//         document.write(`<h2>${i}번째 유저</h2>`);
//         document.write(`<h2>아이디: ${arr1[0].userName}</h2>`);
//         document.write(`<h2>이메일: ${arr1[0].userEmail}</h2>`);
//         document.write(`<h2>프사: ${arr1[0].userProfile}</h2>`);
//         document.write(`<h2>--------------------</h2>`);
//     }
// }