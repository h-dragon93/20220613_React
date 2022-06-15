
const obj1 = {
  id: 1,
  name: 'NolBu'
}

const obj2 = {
  id: 2,
  address: 'Seoul'
}

const obj3 = Object.assign({}, obj1);
console.log(obj3);

// const obj4 = Object.assign(obj1, obj2);
const obj4 = {...obj1, ...obj2}
console.log(obj4)
console.log(obj1);
