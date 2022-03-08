const a = 'age';

const obj1 = {
  id: 1,
  firstName: 'Ryan',
  lastName: 'Kim',
  [a]: 30,
  getAge() {
    console.log(this.age);
  },
  'my name': 'Ryan Kim',
};
// console.log(obj1['my name']);

const obj2 = {
  id: 1,
  name: 'Ryan',
  age: 20,
  gender: 'M',
};

const { id, name, age, gender } = obj2;
// console.log(gender);

const arr = [1, 'Harry', 'M'];
const [rank, username, size] = arr;
console.log(size);
