const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arrLength = +input[0];
let numArray = input[1].split(' ').map((item) => +item);

function solution(n, arr) {
  // min을 최댓값으로, max를 최솟값 초기화시켜둬야 배열 첫 요소부터 끝 요소까지 요소끼리 비교 가능. 일반적인 비교조건과 반대로 해야 함.
  let min = 1000001;
  let max = -1000001;
  for (let i = 0; i < n; ++i) {
    let item = arr[i];
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  }
  console.log(min, max);
}
solution(arrLength, numArray);
// 배열 메소드 min, max로 쉽게 해도 되지만 문제의 의도상 for문으로 다시 풀어보았다.
