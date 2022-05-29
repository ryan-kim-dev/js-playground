'use strict';
// 참고 강의: https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11
// TODO : 실행 컨텍스트, 이벤트 루프 공부하여 설명 보충

// * 자바스크립트의 비동기 처리의 변천사: callback -> promise(es6) -> async/await(es8)
// * 자바스크립트는 싱글 스레드 방식으로 동작한다. 즉 한 번에 한 작업만 (동기적으로) 순차적으로 실행한다.
// * 싱글 스레드인데도 비동기 처리가 가능한(동시성을 지원하는) 이유는 브라우저에 내장되어 있는 기능인 이벤트 루프 덕분이다.
// ! 호이스팅은 런타임 이전에 코드 평가과정 중에 일어난다. 코드의 실행은 평가가 모두 끝난 후 순차적으로 실행된다.

// * 코드의 순차적 실행 예시
// let sum = 1 + 1;
// console.log(`${sum}`);
// sum += sum;
// console.log(`${sum}`);
// console.log(`${sum + 2}`);

// * 코드의 비동기적 실행 예시
// * setTimeout 함수가 실행되는 동안 아래 코드들도 블로킹되지 않고 먼저 실행됨.(non-blocking)
// * 현재 실행중인 작업이(코드가) 종료되지 않았음에도 다음 작업을 실행하는 방식을 '비동기 처리' 라고 한다.
// let sum = 1 + 1;
// console.log(`${sum}`);
// setTimeout(() => console.log(`${(sum += sum)}`), 2000);
// console.log(`${sum}`);
// console.log(`${sum + 2}`);

// * 동기적으로 처리되는 콜백함수 예시
// let sum = 1;
// function printNow(callback) {
//   callback();
// }
// printNow(() => console.log(`${sum} by 동기 처리된 콜백함수`));
// console.log(`${sum}`);
// console.log(`${sum + 1}`);
// console.log(`${sum + 2}`);

// * 비동기적으로 처리되는 콜백함수 예시
// function printLater(callback, timeout) {
//   setTimeout(callback, timeout);
// }
// printLater(() => console.log(`${sum} by 비동기 처리된 콜백함수`), 2000);
// let sum = 1;
// console.log(`${sum}`);
// console.log(`${sum + 1}`);
// console.log(`${sum + 2}`);

// * 콜백 함수로 비동기 처리를 지양하는 이유: 콜백 지옥
// 코드 출처: https://velog.io/@seul06/JavaScript-%EC%BD%9C%EB%B0%B1-%EC%A7%80%EC%98%A5

// step1(function (value1) {
//   step2(function (value2) {
//     step3(function (value3) {
//       step4(function (value4) {
//         step5(function (value5) {
//           step6(function (value6) {
//             // Do something with value6
//           });
//         });
//       });
//     });
//   });
// });
