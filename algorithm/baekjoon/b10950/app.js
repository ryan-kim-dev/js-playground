const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input.splice(0, 1));
input = input.toString().split('\n');
input = input[0];
input = input.split(',');

function solution(sum) {
  for (let i = 0; i < N; i++) {
    let toSum = sum[i];
    toSum = toSum.split(' ');
    let A = Number(toSum[0]);
    let B = Number(toSum[1]);
    console.log(A + B);
  }
}
solution(input);
