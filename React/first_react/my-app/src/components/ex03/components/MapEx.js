// import {Fragment} from "react";
const arr = [1, 2, 3, 4, 5];

// arr.map((num) => {console.log(num + '하트')});
// arr.filter((num) => {console.log(num + '하트')});

export const MapEx = () => {
  return (
    <div>
      {arr.map((num) => (
        // <Fragment key={num}>{num}</Fragment>
        <h2 key={num}>{num}</h2>
      ))}
    </div>
  );
};

// map()
// 배열만 사용할 수 있음
// 기존배열을 복사하여 배열안의 요소를 새로운 값으로 반환시킴
// map을 사용할땐 반드시 key를 사용하여 값은 고유값으로 적용해야함
