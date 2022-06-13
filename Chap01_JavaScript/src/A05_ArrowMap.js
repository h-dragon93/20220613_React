(function () {
  // 일반 함수.
  function fn() {
    console.log('funcion');
  }
  fn();

  /* 이런 식으로는 사용불가
    fn() => {

    }
    */

  const ary = [10, 11, 100, 101, 1000];

  // 익명함수(이름이 없는 함수)
  // map => 배열의 값을 순차적으로 1개씩 꺼내와서 내부 익명함수의 매개변수로 잔달해서 실행
  // 익명함수(내부함수)가 실행된 후 결과값을 반환 => 계산에 의한 새로운 배열이 만들어진다.
  const one = ary.map(item => item * 2);
  console.log(one);

  // 리턴값이 객체면 ()로 묶는다. => 이유는 객체의 시작 { 를 함수의 시작으로 인식.
  const two = ary.map((item, index) => ({i: index, value: item * 2}));
  console.log(two);

  // filter => 배열의 값을 순차적으로 1개씩 꺼내와서 내부 익명함수의 매개변수로 잔달해서 실행
  // 익명함수(내부함수)가 실행된 후 결과값을 반환 => 계산에 의한 새로운 배열이 만들어진다.
  // 다만 함수 내부의 조건에 의해 결정된다. true => 반환, false => 반환 안됨
  const three = ary.filter(item => item % 2);
  console.log(three);

  /*
  const four = ary.filter((item, i) => {
    if (item % 2) return {index: i, value: item * 2};
  });
  console.log(four);
  */
})();
