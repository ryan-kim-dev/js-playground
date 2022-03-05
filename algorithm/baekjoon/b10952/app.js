const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let testCaseArray = [];

for (let i = 0; i < input.length; ++i) {
  let tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
function solution(arr) {
  for (let j = 0; j < arr.length; ++j) {
    if (arr[j].A > 0 && arr[j].B < 10) {
      console.log(arr[j].A + arr[j].B);
    }
  }
}
solution(testCaseArray);
