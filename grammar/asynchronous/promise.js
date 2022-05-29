/**
 * 간단한 프로미스 사용 예시 설명
 * 사전 예약 기간에 등록버튼을 클릭한 사람에게: 개강일에 개강 알림 메일 발송 -> then
 * 사전 예약 기간이 종료된 후 등록버튼을 클릭한 사람에게: 과정 안내 페이지로 바로 이동 -> catch or finally
 */

// * 프로미스의 상태(state) - pending, settled( fulfilled 또는 rejected )

// * 1. pending: 생성된 직후의 기본 상태. 비동기 처리가 아직 수행되지 않은 상태이다.
// * 2. settled: fulfilled 또는 rejected 상태가 되고 더는 다른 상태로 변화할 수 없다.
// * - fulfilled: 비동기 처리가 성공하여 resolve 함수가 호출된다.
// * - rejected: 비동기 처리가 실패하여 reject 함수가 호출된다.

// * 1. 프로미스 생성
// * 새로운 프로미스 생성 시 콜백함수(executor)가 자동으로 실행됨을 반드시 기억해야 한다.

// const promise = new Promise((resolve, reject) => {
//   // 언제 끝날지 모르는 작업, 또는 주가 되는 작업이 아닌 것들을 주로 비동기 처리 한다.
//   // (네트워크 통신, 파일 읽어오기 등의 비동기로 처리하는게 좋은 작업)

//   console.log(
//     '프로미스 생성 시 인수로 들어간 콜백함수가 자동으로 실행된다. 그래서 이 메세지가 나온다.'
//   );
//   setTimeout(() => {
//     // resolve('kim'); // 성공 시의 실행할 코드: resolve 호출
//     reject(new Error('에러 객체로 어떤 에러가 발생하였는지 명시해주자.'));
//   }, 2000);
// });

// // * 2. 프로미스의 후속 처리 메서드(then, catch, finally)

// promise
//   .then((value) => {
//     // * then 메서드: 프로미스가 성공하면 실행(resolve 콜백함수가 호출된 경우)
//     // .then(onFulfilled, onRejected) -> then 메서드에는 콜백함수를 두개도 넣을 수 있다.
//     // 두번째 콜백함수로 catch와 같은 역할을 할 수 있음.
//     console.log(value);
//   })
//   .catch((error) => {
//     // * catch 메서드: 프로미스가 실패해도 실행(reject 콜백함수가 호출된 경우)
//     console.log(error);
//   });
//   .finally(() => {
//     // * finally 메서드: 프로미스가 성공하던 실패하던 무조건 실행
//     console.log('finally 메서드는 성공하던 실패하던 무조건 실행된다.');
//   });

// * 3. promise chaining
// const adder = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// adder
//   .then((num) => num + 1)
//   .then((num) => num + 1)
//   .then((num) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(num * 2), 1000);
//     });
//   })
//   .then((num) => console.log(num));
