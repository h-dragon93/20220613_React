/* eslint-disable require-jsdoc */
class Jumsu {
  #_name;
  #_kor;
  constructor(name, kor, eng) {
    this.#_name = name;
    this.#_kor = kor;
    this._eng = eng;
  }

  // 일반 메서드
  onTotal() {
    return this.#_kor + this._eng;
  }
  display() {
    console.log(`${this.#_name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
  }
  getName() {
    return this.#_name;
  }

  // getter, setter
  // 정의는 메서드 방식이지만 사용은 프로퍼티 형식으로 사용한다.
  get kor() {
    return this.#_kor;
  }
  set kor(num) {
    let value = Number(num);
    if (isNaN(value)) value = 0;
    this.#_kor = value;
  }
}

const nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name); // undefined
console.log(nolbu.getName()); // nolbu

console.log(nolbu._kor); // undefined

// 정의는 함수 방식이지만 사용은 프로퍼티 방식이다.
console.log(nolbu.kor);

nolbu.kor = 50;
console.log(nolbu.kor);
