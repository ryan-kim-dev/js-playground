const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => +item);
input = input[0];

function solution(n) {
  let star = '*';
  for (let i = 1; i <= n; i++) {
    console.log(star.repeat(i));
  }
}
solution(input);
