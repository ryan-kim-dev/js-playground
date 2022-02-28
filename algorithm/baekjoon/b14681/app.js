// 백준에서 fs모듈로 입력 받을 시 런타임 에러 발생하여 readline 모듈 사용.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(x, y) {
  let ans = 0; // 일일히 콘솔로그 찍지 말고 각 분기별로 ans변수에 값 저장, 마지막에 콘솔로그 한번만 사용.
  if (x > 0 && y > 0) {
    ans = 1;
  }
  if (x < 0 && y > 0) {
    ans = 2;
  }
  if (x < 0 && y < 0) {
    ans = 3;
  }
  if (x > 0 && y < 0) {
    ans = 4;
  }
  console.log(ans);
}
