// A01FuncProps.js
import React from 'react'
import PropTypes from 'prop-types'

// 생성자 함수의 매개변수로 props 값을 받는다
function A01FuncProps(props) {

  // 하나로 묶어서 사용해도 된다.
  const {name, age, ary, user, onAdd, isChecked} = props;
  const {children} = props;
  
  return (
    <div>
      <h3>A01FuncProps</h3>

      <div>
        매개변수 props를 이용<br />
        Name: {props.name}<br />
        Age: {props.age}<br />
        Array: {props.ary[0]} / {props.ary[1]} / {props.ary[2]}<br />
        User: {props.user.name} / {props.user.age} / {props.user.address}<br />
        onAdd: {props.onAdd(10, 20)}<br />
        isChecked: {props.isChecked ? 'T' : 'F'}<br />
        <br />
        {props.children}<br />

        <div>
          Num: {props.num}<br />
          Object: {props.obj && props.obj.name}
        </div>
      </div>
      <br />

      <div>
        디스트럭처링을 이용해서 구현<br />
        Name: {name}<br />
        Age: {age}<br />
        Array: {ary[0]} / {ary[1]} / {ary[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
        isChecked: {isChecked ? 'T' : 'F'}<br />
        <br />
        {children}
      </div>
    </div>
  )
}

export default A01FuncProps

// 넘어오지 않을 수도 있는 속성에 대해 기본값 지정 => defaultProps
A01FuncProps.defaultProps = {
  age: 1000,
  num: 100,
  obj: {name: 'unknown'}
}

// 넘어오는 props의 값에 대한 타입을 체크 => propTypes
// 타입을 체크하는 모듈은 따로 import 해야 한다 => prop-types
A01FuncProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  ary: PropTypes.array,
  user: PropTypes.object,
  onAdd: PropTypes.func,
  isChecked: PropTypes.bool,
  num: PropTypes.number.isRequired,     // defaul의 값도 입력한 것으로 취급
}