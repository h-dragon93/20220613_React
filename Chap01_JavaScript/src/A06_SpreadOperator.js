// ES6
(function () {
  // 배열, 객체, 문자열 등의 집합 요소의 값을 개별 요소 형태로 분할해서 사용 할 목적
  console.log(...[10, 11, 100]);
  console.log(...'NolBu');
  console.log('');

  // ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
  // eslint-disable-next-line
  function spreadFun(a, b, c, d, e, ...rest) {
    console.log(`a => ${a}`);
    console.log(`b => ${b}`);
    console.log(`c => ${c}`);
    console.log(`d => ${d}`);
    console.log(`e => ${e}`);
    console.log(`rest => ${rest} / ${rest.length}`);
  }

  spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
  console.log('');

  // 배열 합치기.
  const aryOne = [10, 20, 30];
  var aryTwo = [1, 2, 3, ...aryOne];
  console.log(aryTwo);
  console.log('');

  // Object
  const objOne = {
    id: 1,
    name: 'NolBu',
  };

  const objTwo = {
    id: 2,
    address: 'Seoul',
    // 없는 속성은 추가되고 있는 속성은 덮어쓰기가 된다. 항상 뒤에 선언한 값으로 덮어씀.
    ...objOne,
  };
  console.log(objTwo);

  // 기존의 값을 유지하면서 덮어쓰려면
  const objThree = {
    ...objOne,
    id: 3,
    address: 'InChen',
  };
  console.log(objThree);
})();
