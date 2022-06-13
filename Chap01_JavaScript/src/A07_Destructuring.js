(function () {
  const obj = {
    name: 'NolBu',
    age: 30,
  };

  // const name = obj.name;
  // const age = obj.age;

  // 객체의 요소 값을 {} 형태로 선언해서 바로 꺼내 사용.
  // 이때 변수의 이름은 객체의 key와 동일한 이름이어야 한다.
  const {name, age} = obj;
  console.log(name, age);

  // 이미 선언된 변수명이 존재한다면 별치을 이용
  const {name: nickname, age: num} = obj;
  console.log(nickname, num);

  // 객체 내부의 없는 속성의 값을 꺼내오면 undefined로 값 표시가 안됨.
  // 이런 경우를 대비해서 기본값 지정 가능.
  const {name: x, age: y = 0, address = 'Seoul'} = obj;
  console.log(x, y, address);
  console.log('');

  // 배열은 별칭 사용은 안됨
  const ary = ['A', 'B', 'C'];
  const [a, b, c, d = 0] = ary;
  console.log(a, b, c, d);
  console.log('');

  // 원래의 값은 변경 사항 없음.
  console.log(obj, ary);
})();
