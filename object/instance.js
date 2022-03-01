// 생성자 함수로 객체 생성하기
// 생성자 함수의 함수명 첫글자는 대문자로 작성.
// 5번. 11번 라인은 실제 코드가 아니나 해당 동작이 진행됨을 설명하기 위한 주석임.
function Cars(model, price) {
  // this = []; 1.암묵적으로 빈 객체를 생성하고 이 객체(인스턴스)를 this에 바인딩
  this.model = model;
  this.price = price;
  this.showPrice = function () {
    console.log(`${model}의 가격은 ${price}만원 입니다.`); // 템플릿 리터럴
  };
  // return this; 2. 실제 코드상으로는 드러나지 않지만 this를 반환한다.
  //return할 객체를 명시하면 this 반환은 무시되고 명시한 객체가 반환됨.
}
// 인스턴스 생성
const car1 = new Cars('sonata', 3000);
const car2 = new Cars('morning', 1000);
const car3 = new Cars('g80', 8000);
console.log(car1, car2, car3);
car1.showPrice(); // sonata의 가격은 3000만원 입니다.
car2.showPrice();
car3.showPrice();
