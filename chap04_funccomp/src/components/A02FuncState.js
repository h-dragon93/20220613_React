// A02FuncState.js
import React, {useState} from 'react'

function A02FuncState() {
  // state는 useState()라는 Hook을 이용해 정의
  const [name, setName] = useState('NolBu');
  const [age, setAge] = useState(20);
  const [arr, setArray] = useState([10, 20]);
  const [user, setUser] = useState({
    name: 'HungBu',
    age: 10,
  });
  const [isChecked, setIsChecked] = useState(true);

  const changeName = () => setName('Hunbu');
  const changeAge = () => setAge(200);

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    setArray(arr.concat(random));
  }
  const updateArray = (index, value) => setArray(arr.map((item, i) => index === i ? value : item));
  const deleteArray = (index) => setArray(arr.filter((item, i) => index !== i));

  // Object
  const addObject = (key, value) => setUser({...user, [key]: value});
  const updateObject = (key, value) => setUser({...user, [key]: value});
  const deleteObject = (key) => {
    delete user[key];
    setUser({...user});
  }

  const changeCheck = () => setIsChecked(!isChecked);

  return (
    <div>
      <h3>A02FuncState</h3>

      <div>
        Name: {name}<br />
        Age: {age + 100}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        Check: {isChecked ? 'T' : 'F'}
      </div>

      <div>
        {arr.map((item, index) => <span key={index}>{item}, </span>)}
      </div>
      <br />

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={changeAge}>Age</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(0, 1000)}>Update Array</button>
        <button onClick={() => deleteArray(0)}>Delete Array</button>

        <button onClick={() => addObject('address', 'Seoul')}>Add Object</button>
        <button onClick={() => updateObject('address', 'Busan')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>

        <button onClick={changeCheck}>Check</button>
      </div>
    </div>
  )
}

export default A02FuncState
