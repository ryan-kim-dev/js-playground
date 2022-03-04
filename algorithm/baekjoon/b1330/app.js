const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
let a = input[0];
let b = input[1];
let answer;
function solution(a, b) {
  if (a > b) answer = '>';
  else if (a < b) answer = '<';
  else answer = '==';
  return console.log(answer);
}
solution(a, b);
