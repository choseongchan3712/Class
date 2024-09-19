// for (let i = 1; i < 11; i ++) {
//     document.write(i);
// }

// let i = 0;
// while (i < 100) {
//     i++;
//     document.write(i);
// }

//반복문

// for (let i = 1; i < 11; i ++) {
//     document.write(i + "<br>");
// }


// ------------------------문제---------------------------------------


// for (i = 0; i < 10; i ++) {
//     if (i === 0) {
//         document.write("5단 <br>");
//     }else{
//         document.write(`5 X ${i} = ${i * 5} <br>`);
//     }
// }

// let num = Number(prompt("원하는숫자를 입력하세요."));

// for (i = 0; i < 10; i ++) {
//     if (i === 0) {
//         document.write(`${num}단 <br>`);
//     }else{
//         document.write(`${num} X ${i} = ${i * num} <br>`);
//     }
// }





//----------------------------------------------------------

// document.write(`${num}단 <br>`);
//  if (num % 2 === 0) {
//     for (let i = 1; i < 10; i++) {
    //         if (i % 2 === 0) {
//             document.write(`${num} X ${i} = ${i * num} <br>`);
//         }
//     }
//  } else if (num % 2 === 1) {
    //     for (let i = 1; i < 10; i++) {
        //         if (i % 2 === 1) {
//             document.write(`${num} X ${i} = ${i * num} <br>`);
//         }
//     }
//  }

//------------------------------------------------------------

// for (let i = 1; i < 10; i ++) {
    //     if (num % 2 === 0) {
        //         if (i % 2 === 0) {
            //             document.write(`${num} X ${i} = ${i * num} <br>`);
            //         }
            //     } else if (num % 2 === 1) {
                //         if (i % 2 === 1) {
    //             document.write(`${num} X ${i} = ${i * num} <br>`);
    //         }
    //     }
    // }
    
    //----------------------------------------------------------------
    
// const num = Number(prompt('원하는 숫자를 입력하세요.'));
// document.write(`${num}단 <br>`);

// for (let i = 1; i < 10; i++) {
//     if (num % 2 === 0 && i % 2 === 0) {
//         document.write(`${num} X ${i} = ${i * num} <br>`);
//     } else if (num % 2 === 1 && i % 2 === 1) {
//         document.write(`${num} X ${i} = ${i * num} <br>`);
//     }
// }

const num = Number(prompt('원하는 숫자를 입력하세요.'));
document.write(`${num}단 <br>`);

const result = num % 2;

if (result === 0) {
    for(let i = 2; i < 10; i += 2) {
        document.write(`${num} X ${i} = ${i * num} <br>`);
    }
} else if (result === 1) {
    for(let i = 1; i < 10; i += 2) {
        document.write(`${num} X ${i} = ${i * num} <br>`);
    }
}













