const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B)); // 예제 출력 필히 참고할 것, 정수부분만 필요함(버림).
  console.log(A % B);
}
