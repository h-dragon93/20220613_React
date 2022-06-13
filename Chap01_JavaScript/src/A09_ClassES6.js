/* eslint-disable require-jsdoc */
class Person {
  // #name;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = () => {
      console.log(`${this.name} / ${this.age}`);
    };
  }

  view() {
    console.log(`${this.name} / ${this.age}`);
  }
}

const nolbu = new Person('놀부', 20);
console.log(nolbu);
nolbu.info();
nolbu.view();

const hungbu = new Person('HungBu', 10);
console.log(hungbu);
