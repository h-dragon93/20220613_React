class Person {
  constructor(name, age, add) {
    this.name = name;
    this.age = age;
    this.add = add;
  }

  toString() {
    console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
  }
  getName() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, age, add, job) {
    // Person의 constructor()
    super(name, age, add);
    this.job = job;
  }

  // override
  toString() {
    console.log(`[Person] name=${this.name} age=${this.age} add=${this.add} job=${this.job}`);
  }
}

const hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

const nolbu = new Employee('Nolbu', 30, 'Seoul', 'manager');
nolbu.toString();
console.log(nolbu.getName());

console.log(hungBu);
console.log(nolbu);
