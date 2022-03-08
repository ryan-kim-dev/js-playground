const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(n) {
  if (n <= 1) {
    // 0!을 대응하기 위한 탈출조건
    return 1;
  }
  return n * solution(n - 1);
}
console.log(solution(input));
