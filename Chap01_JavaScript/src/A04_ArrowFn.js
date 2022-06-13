(function () {
  // 함수 리터럴. 함수 표현식
  const onAdd = function (x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  };

  const onMin = function (x, y) {
    return `${x} - ${y} = ${x - y}`;
  };

  onAdd(10, 20);
  console.log(onMin(10, 20));
  console.log('');

  // ES6.
  // 함수 리터럴 방식만 변경 가능
  // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
  const onMulti = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  };
  console.log(onMulti(10, 20));

  // 매개변수가 1개인 경우는 ()를 생략할 수 있다
  // ** => es6에서 추가된 연산자. 3 ** 3 => 3 * 3 * 3
  const onDouble = x => {
    return 3 ** x;
  };
  console.log(onDouble(3));

  // 매개변수가 없는 경우는 ()를 생략할 수 없다.
  const onPlus = () => {
    console.log('1 + 2 = 3');
  };
  onPlus();

  // 함수 내부 로직이 return 구문 딱 1줄인 경우는 return을 생략하고 한 줄에 정의한다.
  // return 기술하면 에러.
  // => 뒤의 구문이 값이면 알아서 return을, 식이면 그대로 실행 구문으로 실행한다.
  const onDiv = (x, y) => `${x} / ${y} = ${x / y}`;
  console.log(onDiv(10, 2));

  // 함수의 매개변수의 초기값을 지정 가능
  const onOne = (x = 10, y = 20) => `${x} + ${y} = ${x + y}`;

  console.log(onOne());
  console.log(onOne(1));
  console.log(onOne(1, 2));

  const onTwo = x => 3 ** x;
  console.log(onTwo(3));
})();
