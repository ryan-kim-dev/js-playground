const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = String(Number(input[0]) * Number(input[1]) * Number(input[2]));
function solution(num) {
  for (let i = 0; i < 10; i++) {
    let count = 0;
    for (let j = 0; j < num.length; j++) {
      if (Number(num[j]) === i) {
        count++;
      }
    }
    console.log(count);
  }
}
solution(input);
