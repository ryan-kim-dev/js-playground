// 객체 속성 호출시 온점으로 불러올 수 없는 경우 + 속성값 뒤에 세미콜론 못 붙이는 경우
const obj = {
  "a b": "n1",
  "a-b": "n2",
  "2ab": "n3",
  "a.b": "n4",
};
// 전부 obj['속성이름']으로만 속성값 불러올 수 있고, 속성이름 뒤에 세미콜론 붙일시 문법오류 발생
