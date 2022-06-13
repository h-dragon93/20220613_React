/* eslint-disable */
// 변수.

var nickname = 'NolBu';
console.log('nickname', nickname, typeof nickname);

nickname = 100;
console.log("nickname", nickname, typeof nickname);

// var 변수는 중복 선언이 가능.
var nickname = true;
console.log("nickname", nickname, typeof nickname);

// var 변수는 함수 이외의 { } 에서 범위를 갖지 않는다(지역 변수가 아니다)
if (true) {
  var nickname = 200;
  console.log("nickname IF", nickname, typeof nickname);  // 200
}
console.log("nickname", nickname, typeof nickname);       // 200

for (var i = 0; i < 3; i++) {}
console.log("i=> ", i, typeof i);
console.log('');

// ES2015 (ES6)
let age = 10;
console.log("age", age, typeof age);

age = 'HungBu';
console.log("age", age, typeof age);

// 선언한 변수를 재 선언할 수 없다.
// let age = true;

// 모든 {}에서 범위를 갖는다. 지역변수로 취급된다
if (true) {
  let age = 500;
  console.log("age IF", age, typeof age);   // 500
}
console.log("age", age, typeof age);        // HungBu

for (let k = 0; k < 3; k++) { }
// console.log("k=> ", k, typeof k);        // Error
console.log('');


// 상수
const MY_PI = 3.1415;
console.log("MY_PI", MY_PI, typeof MY_PI); 

// 값은 수정할 수 없다.
// MY_PI = 10;        // Error

// 상수는 선언 시 초기화가 필수
// const MY_NUM;      // Error
// MY_NUM = 10;

const MY_USER = {
  name: 'NolBu',
  age: 20,
};

// 새로운 값을 대입 할 수 없음
// MY_USER = {id: 100};   // Error

// 객체 자체의 주소값을 변경은 안되지만(에러) 속성 변경은 가능
MY_USER.name = 'HungBu';
console.log(MY_USER);

