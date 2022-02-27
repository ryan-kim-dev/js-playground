// 배열 고차 함수 forEach, map, filter, reduce 학습
// 참고 강의: https://www.youtube.com/watch?v=vqdzVZxoRtM&t=19s

const cars = [
  { brand: 'Hyundai', model: 'Sonata', isFast: false, price: 100 },
  { brand: 'Benz', model: 'AMG', isFast: true, price: 1000 },
  { brand: 'Kia', model: 'Stinger', isFast: true, price: 500 },
  { brand: 'BMW', model: 'i3', isFast: false, price: 300 },
]; // trailing comma: 배열이나 객체의 마지막 요소에도 쉼표를 찍어주는게 추후 코드 수정에 편리함.

// forEach 메서드: for문을 대체하는 고차함수. 객체의 길이만큼 반복하며 콜백함수에 반복하며 할 행동을 지정해준다.
// forEach메서드의 매개변수에 요소값, 인덱스, this 세가지를 넣어 인자로 받을 수 있다.
cars.forEach(function (car) {
  console.log(car.isFast);
});
/*
false
true
true
false
*/
cars.forEach(function (car, index) {
  console.log('forEach 메서드 ' + car.model, index);
});

// map 메서드: 기존 배열의 특정 key의 value들로 새로운 배열을 만들 때 사용.
const carPrice = cars.map(function (element) {
  return `The ${element.model}'s price is ${element.price} and isFast value is ${element.isFast}.`;
});
console.log(carPrice); // [ 100, 1000, 500, 300 ]

// filter 메서드: 기존 배열에서 특정 조건만 가진 value만 뽑아냄.
// 데이터를 불러와서 데이터테이블(라이브러리)을 만들 때 사용. ex: 실시간 검색 등
const slowCars = cars.filter(function (slow) {
  return slow.isFast === false;
});
console.log(slowCars);

// reduce 메서드:
const totalPrice = cars.reduce(function (acc, cur) {
  // 초기값과 배열의 첫번째 요소값을 콜백함수에 인수로 전달.
  return acc + cur.price; // obj + obj.value;
}, 0); // 초기값(acc)를 0으로 반드시 초기화 시켜줘야 정상적으로 출력.
console.log(totalPrice);
