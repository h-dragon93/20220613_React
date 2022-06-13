import {num, onAdd, longNameFunction as long} from './A12_ExportModule';
// import onPlus from './A13_DefaultModule';
// import {name} from './A13_DefaultModule';
import onPlus, {name} from './A13_DefaultModule';

console.log(num);
console.log(onAdd(10, 20));
console.log(long());
console.log('');

console.log(onPlus(100, 200));
console.log(name);

const app = document.querySelector('#app');
const h3 = document.createElement('h3'); // <h3>30</h3>
const h3Text = document.createTextNode(onAdd(10, 20));
h3.appendChild(h3Text);
app.appendChild(h3);
