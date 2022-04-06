// Set 객체를 사용하여 중복값을 제거하여 .size하여 요소의 개수를 구함
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i] % 42;
    newArr.push(num);
  }
  const count = new Set(newArr);
  console.log(count.size);
}
solution(input);
