const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
function solution() {
  return console.log(input + '??!');
}
solution();
