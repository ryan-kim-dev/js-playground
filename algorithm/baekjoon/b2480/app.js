const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(a, b, c) {
  if (a === b && b === c) {
    return console.log(10000 + a * 1000);
  }
  if (a !== b || a !== c || b !== c) {
    if (a === b || a === c) {
      return console.log(1000 + a * 100);
    }
    if (b === c) {
      return console.log(1000 + b * 100);
    }
  }
  if (a !== b && a !== c && b !== c) {
    let newArr = [a, b, c].sort();
    return console.log(newArr.pop() * 100);
  }
}
solution(input[0], input[1], input[2]);
