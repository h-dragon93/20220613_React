function onAdd(x, y) {
  return x * y;
}

const name = 'NolBu';

// default가 붙은 변수, 함수는 사용하는 곳에서 임의의 이름으로 사용가능
// default는 현재 파일에서 단 1개의 요소만 지정이 가능하다.
export default onAdd;

// 개별요소 출력은 별도로 사용이 가능
export {name};
