const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// nodejs에서 process객체의 platform 속성
// process: 현재 실행되고 있는 노드 프로세스에 대한 정보
// process.platform: 운영체제의 플랫폼 정보(ex: win32, linux, darwin)
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
function solution(a, b) {
  console.log(a - b);
}
solution(input[0], input[1]);

// .map((item) => +item;)
