// A01FuncProps.js
import React from 'react'

// 생성자 함수의 매개변수로 props 값을 받는다
function A01FuncProps(props) {

  const {name, age, ary, user, onAdd, isChecked} = props;
  
  return (
    <div>
      <h3>A01FuncProps</h3>

      <div>
        Name: {props.name}<br />
        Age: {props.age}<br />
        Array: {props.ary[0]} / {props.ary[1]} / {props.ary[2]}<br />
        User: {props.user.name} / {props.user.age} / {props.user.address}<br />
        onAdd: {props.onAdd(10, 20)}<br />
        isChecked: {props.isChecked ? 'T' : 'F'}
      </div>

      <div>
        Name: {name}<br />
        Age: {age}<br />
        Array: {ary[0]} / {ary[1]} / {ary[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
        isChecked: {isChecked ? 'T' : 'F'}
      </div>
    </div>
  )
}

export default A01FuncProps