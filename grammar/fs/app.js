const fs = require('fs');

// const input = fs.readFile('./file/input.txt', (err, data) =>
//   console.log('비동기적 읽기 ' + data)
// );
// const asyncInput = fs.readFileSync('./file/input.txt', 'utf-8');
// console.log('동기적 읽기 ' + asyncInput);

// 둘 다 콜백함수를 주니 비동기적 읽기 코드가 실행이 안됨.
// 비동기적 읽기 코드를 콜백함수가 아닌 전역에서 콘솔로그를 찍으니 둘 다 출력됨.

// * 파일 쓰기 메서드 (writeFile) 동기/비동기 실습
// const data = 'fs.writeFile 실습';

// fs.writeFile('./file/input.txt', data, 'utf-8', (err) =>
//   console.log('비동기적 파일 쓰기 완료')
// );

// fs.writeFileSync('./file/input.txt', data, 'utf-8');
// console.log('동기적 파일 쓰기 완료');

// * 1. readFile메서드의 1번째 매개변수인 path 설명

// * 2. readFile메서드의 2번째 매개변수options 설명
// 문자열이 아닌 객체 형태로 받을 경우
// let options = {
//   encoding: 'utf-8', // 인코딩 방식 지정
//   flag: 'r', //
// };
// fs.readFile('./file/input.txt', options, (err, data) => console.log(data));

// * 동기적 방식과 비동기적 방식에서의 예외처리 방식 차이점
// * 1. 동기적 방식에서의 예외처리 예제 : try~catch문 활용
// * fs모듈의 동기 메서드는 결괏값을 반환하여 예외를 일으킬 수 있어 예외처리 필요.

// try {
//   const data = fs.readFileSync('nonExsiting.txt', 'utf-8');
//   console.log(data);
// } catch (err) {
//   console.log(err); // Error: ENOENT: no such file or directory, open 'nonExsiting.txt'
// }

// try문 에서 예외 케이스를 정의: 없는 파일을 읽으려고 할 경우.
// 현재 data는 없는 파일을 읽으려고 한다.
// try에서 발생한 예외 경우에 실행할 코드가 catch문에 작성됨.

// * 2. 비동기적 방식에서의 예외처리 예제: 제어문 활용
// * fs모듈의 비동기 메서드는 아무런 결괏값을 반환하지 않는다.

// fs.readFile('nonExsisting.txt', 'utf-8', (err, data) => {
//   err ? console.log(err) : console.log(data);
// });
