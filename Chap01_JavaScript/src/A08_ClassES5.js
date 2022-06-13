(function () {
  // eslint-disable-next-line valid-jsdoc
  /** class로 정의하는 경우 함수의 첫 글자를 대문자로 표시 */
  function Person(name, age) {
    this.name = name;
    this.age = age;

    this.info = () => {
      console.log(`${this.name} / ${this.age}`);
    };
  }

  // eslint-disable-next-line
  Person.prototype.view = function() {
    console.log(`${this.name} / ${this.age}`);
  };

  const nolbu = new Person('NolBu', 30);
  console.log(nolbu);
  nolbu.info();
  nolbu.view();
  console.log('');

  const hungbu = new Person('HungBu', 10);
  console.log(hungbu);
  hungbu.info();
  hungbu.view();
  console.log('');
})();
