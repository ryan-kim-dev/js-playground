// * 콜백함수 - 다른 함수의 매개변수(parameter)로 들어가는 함수.
// * 순차적으로 함수를 실행하기 위해 사용.

$input.addEventListener('input', function () {
  console.log(event.target.value); // input 이벤트 발생시 콜백함수가 실행되어 콘솔창에 입력내용(event.target.value)를 표시해줌
});
$button1.addEventListener('click', function () {
  $input.value = ''; // 버튼을 클릭하는 이벤트 발생시 input창을 비운다.
  $input.focus(); // input창 강조효과
});

// * 이벤트리스너에서의 콜백함수 사용 예제
const onInputOperator = () => {
  confirm($input2.value);
};

$input2.addEventListener('input', onInputOperator);

// * 고차함수
// * 1. 함수를 매개변수(parameter)로 전달받는 함수
// * 2. 함수를 반환하는 함수

function func1(callback) {
  console.log(1);
  return callback();
}
function func2() {
  console.log(2);
}

func1(func2); // func1 함수를 실행하는데 매개변수로 func2함수를 받아서 실행해라.
// 1
// 2

// * 비동기 처리에서의 고차함수와 콜백함수 사용 예제
const getDataFromFilePromise = (filePath) => {
  // return new Promise()
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};
