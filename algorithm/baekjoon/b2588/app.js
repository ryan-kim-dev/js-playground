const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => +item);

function solution(a, b) {
  const stringB = String(b); // 문자열로 변환시켜 인덱스를 부여함.
  const one = +stringB[2];
  const ten = +stringB[1];
  const hun = +stringB[0];
  console.log(a * one); // 뺄셈, 곱셈, 나눗셈에선 문자열이 숫자로 바뀜.
  console.log(a * ten);
  console.log(a * hun);
  console.log(a * b);
}
solution(input[0], input[1]);
