// A01ClassProps.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class A01ClassProps extends Component {
  // 받은 props의 값을 여기서는 수정 불가.
  changeName = () => this.props.name = 'HungBu'
  
  render() {
    return (
      <div>
        <h3>A01ClassProps - [immutable 수정 불가]</h3>

        <div>
          Name: {this.props.name}<br />
          Age: {this.props.age + 100}<br />
          {/* undefined, null, true, false 등의 값은 화면에 표시되지 않는다. */}
          Array: {this.props.ary[0]} / {this.props.ary[1]} / {this.props.ary[2]}<br />
          User: {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br />
          Function: {this.props.onAdd(10, 20)}<br />
          isChecked: {this.props.isChecked ? 'TRUE' : 'FALSE'}<br />
          <br />
          <button onClick={this.changeName}>Name</button>
        </div>

        <div>
          Num: {this.props.num}<br />
          {/* 객체의 경우 해당 값이 넘오지 않으면 에러 발생 */}
          Object: {this.props.obj && this.props.obj.name}<br />
        </div>

        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default A01ClassProps

// 넘어오지 않을 수도 있는 속성에 대해 기본값 지정 => defaultProps
A01ClassProps.defaultProps = {
  age: 1000,
  num: 100,
  obj: {name: 'unknown'}
}

// 넘어오는 props의 값에 대한 타입을 체크 => propTypes
// 타입을 체크하는 모듈은 따로 import 해야 한다 => prop-types
A01ClassProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  ary: PropTypes.array,
  user: PropTypes.object,
  onAdd: PropTypes.func,
  isChecked: PropTypes.bool,
  num: PropTypes.number.isRequired,     // defaul의 값도 입력한 것으로 취급
}