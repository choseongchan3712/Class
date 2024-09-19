const text = "국민의힘은 정쟁용 악법이라며 반대하며 본회의에 불참했으며, 무제한토론, 이른바 '필리버스터'는 진행하지 않았습니다.";

// ! slice: 글, 배열 등 원하는 구간에서 내용을 잘라냄
// ! 변수.slice(start, end); => startIndex는 포함되고, endIndex는 포함 안됨.
const sliceText = text.slice(0, 10);
console.log(sliceText + "...");
