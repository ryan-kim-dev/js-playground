const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
  arr = arr
    .toString()
    .split(' ')
    .map((item) => +item);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(min, max);
}
solution(input[1]);
