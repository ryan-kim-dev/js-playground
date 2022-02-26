const cars = [
  { brand: 'Hyundai', model: 'Sonata', isFast: false, price: 100 },
  { brand: 'Benz', model: 'AMG', isFast: true, price: 1000 },
  { brand: 'Kia', model: 'Stinger', isFast: true, price: 500 },
  { brand: 'BMW', model: 'i3', isFast: false, price: 300 },
]; // trailing comma: 배열이나 객체의 마지막 요소에도 쉼표를 찍어주는게 추후 코드 수정에 편리함.

// forEach 메서드:
cars.forEach(function (car) {
  console.log(car.isFast);
});
/*
false
true
true
false
*/
