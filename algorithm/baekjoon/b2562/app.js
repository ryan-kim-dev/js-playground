const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

function solution(arr) {
  let max = Math.max(...arr);
  console.log(max);
  console.log(arr.indexOf(max) + 1);
}
solution(input);
