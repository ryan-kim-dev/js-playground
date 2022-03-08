const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[1];
input = input.split(' ').map((item) => +item);
function solution(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return console.log(min + ' ' + max);
}
solution(input);
