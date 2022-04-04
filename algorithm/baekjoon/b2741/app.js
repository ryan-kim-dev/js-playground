const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
const N = Number(input);
for (let i = 1; i <= N; ++i) {
  console.log(i);
}
