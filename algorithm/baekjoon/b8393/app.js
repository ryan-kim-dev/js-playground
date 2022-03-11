const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = Number(input[0]);
function solution(n) {
  console.log(((1 + n) * n) / 2);
}
solution(input);
