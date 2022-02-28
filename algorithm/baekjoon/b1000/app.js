// 내가 푼 방법
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0]; // 1 2
input = input.split(' '); // ['1', '2']
let A = Number(input[0]),
  B = Number(input[1]);
function solution() {
  return console.log(A + B);
}
solution();

// 더 좋은 방법(라매개발자님 방식)
// map 메서드의 인자로 들어가는 콜백함수의 인자로 요소, 인덱스, map메서드를 호출한 배열을 넣을 수 있다.
// 아래에선 인자의 첫번째 자리인 요소만 사용함. (item)
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item); // map 메서드로 암시적 형변환(+연산자 사용)된 배열 반환
solution(input[0], input[1]);
function solution(A, B) {
  console.log(A + B);
}
