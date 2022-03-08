// 헬퍼 함수(메서드)를 재귀로 사용하기
let arr = [1, 2, 3, 4, 5, 6];
function collectOddValues(array) {
  let odds = [];
  function helper(tempArray) {
    if (tempArray.length === 0) return;
    if (tempArray[0] % 2 !== 0) {
      odds.push(tempArray[0]);
    }
    helper(tempArray.slice(1));
  }
  helper(arr);
  return odds; // [1, 3, 5]
}
collectOddValues(arr);
