const calculateResult = document.querySelector("input");
const num0 = document.querySelector(".num_0");
const num1 = document.querySelector(".num_1");
const num2 = document.querySelector(".num_2");
const num3 = document.querySelector(".num_3");
const num4 = document.querySelector(".num_4");
const num5 = document.querySelector(".num_5");
const num6 = document.querySelector(".num_6");
const num7 = document.querySelector(".num_7");
const num8 = document.querySelector(".num_8");
const num9 = document.querySelector(".num_9");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const clear = document.querySelector(".clear");
const calculate = document.querySelector(".calculate");
const objectNum = {
  numOne: undefined,
  numTwo: undefined,
  symbol: undefined,
  result: undefined,
};

// const resetNum = () => {
//   objectNum.numOne = objectNum.result;
//   objectNum.numTwo = undefined;
// };

// const doCalculate = () => {
//   if (objectNum.symbol === "+") {
//     calculateResult.value = Number(objectNum.numOne) + Number(objectNum.numTwo);
//     objectNum.result = calculateResult.value;
//   } else if (objectNum.symbol === "-") {
//     calculateResult.value = Number(objectNum.numOne) - Number(objectNum.numTwo);
//     objectNum.result = calculateResult.value;
//   } else if (objectNum.symbol === "*") {
//     calculateResult.value = Number(objectNum.numOne) * Number(objectNum.numTwo);
//     objectNum.result = calculateResult.value;
//   } else if (objectNum.symbol === "/") {
//     calculateResult.value = Number(objectNum.numOne) / Number(objectNum.numTwo);
//     objectNum.result = calculateResult.value;
//   }
// };

num0.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = undefined;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "0";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = undefined;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "0";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num1.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "1";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "1";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "1";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "1";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num2.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "2";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "2";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "2";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "2";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num3.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "3";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "3";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "3";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "3";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num4.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "4";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "4";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "4";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "4";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num5.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "5";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "5";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "5";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "5";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num6.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "6";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "6";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "6";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "6";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num7.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "7";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "7";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "7";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "7";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num8.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "8";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "8";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "8";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "8";
      calculateResult.value = objectNum.numTwo;
    }
  }
});
num9.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = "9";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.numOne += "9";
    calculateResult.value = objectNum.numOne;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      objectNum.numTwo = "9";
      calculateResult.value = objectNum.numTwo;
    } else if (objectNum.numTwo !== undefined) {
      objectNum.numTwo += "9";
      calculateResult.value = objectNum.numTwo;
    }
  }
});

plus.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = undefined;
    alert("숫자를 먼저 선택 하세요");
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.symbol = "+";
    calculateResult.value = objectNum.numOne + objectNum.symbol;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      calculateResult.value = objectNum.numOne + objectNum.symbol;
      alert("숫자를 선택해 주세요");
    } else if (objectNum.numTwo !== undefined) {
      if (objectNum.symbol === "+") {
        objectNum.result = Number(objectNum.numOne) + Number(objectNum.numTwo);
      } else if (objectNum.symbol === "-") {
        objectNum.result = Number(objectNum.numOne) - Number(objectNum.numTwo);
      } else if (objectNum.symbol === "*") {
        objectNum.result = Number(objectNum.numOne) * Number(objectNum.numTwo);
      } else if (objectNum.symbol === "/") {
        objectNum.result = Number(objectNum.numOne) / Number(objectNum.numTwo);
      }
      objectNum.numOne = String(objectNum.result);
      objectNum.numTwo = undefined;
      objectNum.symbol = "+";
      calculateResult.value = objectNum.result + objectNum.symbol;
    }
  }
});

minus.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = undefined;
    alert("숫자를 먼저 선택 하세요");
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.symbol = "-";
    calculateResult.value = objectNum.numOne + objectNum.symbol;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      calculateResult.value = objectNum.numOne + objectNum.symbol;
      alert("숫자를 선택해 주세요");
    } else if (objectNum.numTwo !== undefined) {
      if (objectNum.symbol === "+") {
        objectNum.result = Number(objectNum.numOne) + Number(objectNum.numTwo);
      } else if (objectNum.symbol === "-") {
        objectNum.result = Number(objectNum.numOne) - Number(objectNum.numTwo);
      } else if (objectNum.symbol === "*") {
        objectNum.result = Number(objectNum.numOne) * Number(objectNum.numTwo);
      } else if (objectNum.symbol === "/") {
        objectNum.result = Number(objectNum.numOne) / Number(objectNum.numTwo);
      }
      objectNum.numOne = String(objectNum.result);
      objectNum.numTwo = undefined;
      objectNum.symbol = "-";
      calculateResult.value = objectNum.result + objectNum.symbol;
    }
  }
});

divide.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = undefined;
    alert("숫자를 먼저 선택 하세요");
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.symbol = "/";
    calculateResult.value = objectNum.numOne + objectNum.symbol;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      calculateResult.value = objectNum.numOne + objectNum.symbol;
      alert("숫자를 선택해 주세요");
    } else if (objectNum.numTwo !== undefined) {
      if (objectNum.symbol === "+") {
        objectNum.result = Number(objectNum.numOne) + Number(objectNum.numTwo);
      } else if (objectNum.symbol === "-") {
        objectNum.result = Number(objectNum.numOne) - Number(objectNum.numTwo);
      } else if (objectNum.symbol === "*") {
        objectNum.result = Number(objectNum.numOne) * Number(objectNum.numTwo);
      } else if (objectNum.symbol === "/") {
        objectNum.result = Number(objectNum.numOne) / Number(objectNum.numTwo);
      }
      objectNum.numOne = String(objectNum.result);
      objectNum.numTwo = undefined;
      objectNum.symbol = "/";
      calculateResult.value = objectNum.result + objectNum.symbol;
    }
  }
});

multiply.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = undefined;
    alert("숫자를 먼저 선택 하세요");
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
    objectNum.symbol = "*";
    calculateResult.value = objectNum.numOne + objectNum.symbol;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
      calculateResult.value = objectNum.numOne + objectNum.symbol;
      alert("숫자를 선택해 주세요");
    } else if (objectNum.numTwo !== undefined) {
      if (objectNum.symbol === "+") {
        objectNum.result = Number(objectNum.numOne) + Number(objectNum.numTwo);
      } else if (objectNum.symbol === "-") {
        objectNum.result = Number(objectNum.numOne) - Number(objectNum.numTwo);
      } else if (objectNum.symbol === "*") {
        objectNum.result = Number(objectNum.numOne) * Number(objectNum.numTwo);
      } else if (objectNum.symbol === "/") {
        objectNum.result = Number(objectNum.numOne) / Number(objectNum.numTwo);
      }
      objectNum.numOne = String(objectNum.result);
      objectNum.numTwo = undefined;
      objectNum.symbol = "*";
      calculateResult.value = objectNum.result + objectNum.symbol;
    }
  }
});

clear.addEventListener("click", () => {
  objectNum.numOne = undefined;
  objectNum.numTwo = undefined;
  objectNum.symbol = undefined;
  objectNum.result = undefined;
  calculateResult.value = "";
});

calculate.addEventListener("click", () => {
  if (objectNum.numOne === undefined) {
    objectNum.symbol = undefined;
    objectNum.numTwo = undefined;
    objectNum.numOne = undefined;
  } else if (objectNum.numOne !== undefined && objectNum.symbol === undefined) {
    objectNum.numTwo = undefined;
  } else if (objectNum.numOne !== undefined && objectNum.symbol !== undefined) {
    if (objectNum.numTwo === undefined) {
    } else if (objectNum.numTwo !== undefined) {
      if (objectNum.symbol === "+") {
        objectNum.result = Number(objectNum.numOne) + Number(objectNum.numTwo);
      } else if (objectNum.symbol === "-") {
        objectNum.result = Number(objectNum.numOne) - Number(objectNum.numTwo);
      } else if (objectNum.symbol === "*") {
        objectNum.result = Number(objectNum.numOne) * Number(objectNum.numTwo);
      } else if (objectNum.symbol === "/") {
        objectNum.result = Number(objectNum.numOne) / Number(objectNum.numTwo);
      }
      objectNum.numOne = String(objectNum.result);
      objectNum.numTwo = undefined;
      objectNum.symbol = undefined;
      calculateResult.value = objectNum.result;
    }
  }
});