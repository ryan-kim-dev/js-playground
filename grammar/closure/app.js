// * 클로저: 함수형 프로그래밍 언어들(하스켈, 리스프, 얼랭, 스칼라 등)에서 공통적으로 사용되는 중요한 특성.
// * 중첩 함수(내부 함수)가 상위 스코프의 식별자(외부 함수의 매개변수)를 참조하고 있으며,
// * 중첩 함수가 외부 함수보다 더 오래 유지됨, 즉 외부함수가 종료된 후에도 내부함수가 외부 함수의 변수의 값을 기억함.
// * 클로저를 사용하는 이유
// * 1. 은닉화, 캡슐화 - 클로저 모듈 패턴
// * 불필요한 전역 변수를 줄여 의도하지 않은 값의 변경을 막는다.
// * 특정 함수에게만 상태 변경을 허용함.

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const makeAdder = (x) => (y) => x + y;

// const add3 = makeAdder(3);
// console.log(add3(2)); // 5
// // * 10번 줄에서 return되어 외부함수가 종료되었으나 makeAdder의 매개변수 x에 접근이 가능.

// ! 함수를 리턴하는 함수면 전부 클로저? 아니다.
// ! 내부에 선언된 함수가 외부함수의 지역변수를 사용하는 경우만이 클로저 함수이다.

function outer() {
  let num = 1;
  if (num === 1) {
    let name = 'Ryan';
    return function inner() {
      // * inner 함수에서 외부 함수의 num 변수에 접근 할 경우 클로저. 아닐 경우 클로저 x
      console.log(name); // * 클로저 x
      console.log(num); // * 클로저 o
    };
  }
}
