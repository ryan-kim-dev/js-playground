// ES8: async/ await
// async 키워드를 사용하여 함수를 선언하면 async 함수가 된다.
// async 함수는 언제나 프로미스를 반환한다.

// * async 함수는 프로미스를 리턴한다.
// 함수 선언문 앞에 async 키워드를 붙이면, 해당 함수는 항상 프로미스를 반환한다.
// 프로미스가 아닌 값을 리턴시키더라도 resolve된 프라미스로 해당 값을 감싸 프라미스를 반환.
// 프로미스의 후속 처리 메서드(then, catch, finally) 에 콜백함수를 전달할 필요가 없다.
// function f1() {
//   return '그냥 함수';
// }
// async function f2() {
//   return 'async';
// }
// console.log(f1());
// console.log(f2());
// f2().then((result) => console.log(result));

// * 에러 처리
// * await 키워드로 then 메서드는 대체 가능하지만
// * 예외 처리는 try 블록 안에서 발생한 예외를 catch 블록을 통해 해당 예외 발생시 어떻게 할지를 정의한다.

/**
 * async function 더하기(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  try {  var 결과 = await 어려운연산 }
  catch { 어려운연산 Promise가 실패할 경우 실행할 코드 }
}
 */

// * promise 방식
function func1() {
  return new Promise((resolve, reject) => {
    resolve('promise방식');
  });
}

const msg1 = func1(); // 반환값이 프로미스 객체이므로 then 붙일 수 있음.
msg1.then((x) => console.log(x, msg1));

// * async 방식 : promise를 좀 더 간편하게 쓸 수 있다.
// * promise를 생성하는 부분을 생략함.
async function func2() {
  return 'async방식';
}

const msg2 = func2();
msg2.then((y) => console.log(y, msg2));

// * await
// * 프로미스의 상태가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환.
// * await 키워드는 다음 코드 실행을 일시 중지시켰다가 프로미스가 비동기 처리가 완료되면 다시 재개한다.
// 코드 참조: 모던 자바스크립트 딥다이브 p 880

const fetch = require('node-fetch');
// node-fetch: url을 통해 네트워크 요청을 해주는 Fetch api이다.
const getGithubUserId = async (id) => {
  const res = await fetch(`https://api.github.com/users/${id}`);
  // fetch함수가 수행한 http 요청에 대한 서버의 응답이 도착하고
  // fetch함수가 반환한 프로미스가 settled 상태가 될 때까지 대기
  const { name } = await res.json();
};
