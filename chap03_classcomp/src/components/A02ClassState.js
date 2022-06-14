// A02ClassState.js
import React, { Component } from 'react'

export class A02ClassState extends Component {
  constructor() {
    super();

    // 내장 객체. 이 state 객체에 정의된 값은 수정이 되면 화면 갱신 작업이 자동으로 이루어진다.
    this.state = {
      name: 'NolBu',
      age: 30,
      isChecked: true,
      arr: [10, 20],
      user: {name: 'HungBu', age: 10}
    }

    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    // state 객체에 있는 값 변경 내장 메서드.
    // this.state.name = 'HangDan';
    this.setState({name: 'HangDan'})
  }
  chagneAge(){
    this.setState({age: 100});
  }
  chagneCheck = () => this.setState({isChecked: !this.state.isChecked})

  // Array
  addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    // this.setState({arr: this.state.arr.push(random)})
    const newArray = this.state.arr.concat(random);
    this.setState({arr: newArray});
  }
  updateArray = (index, value) => {
    // this.state.arr[index] = value;
    const newArray = this.state.arr.map((item, i) => index === i ? value : item);
    this.setState({arr: newArray});
  }
  deleteArray = (index) => {
    // delete this.state.arr[index];
    const newArray = this.state.arr.filter((item, i) => index !== i);
    this.setState({arr: newArray});
  }

  render() {
    return (
      <div>
        <h3>A02ClassState - [mutable - 변경 가능]</h3>

        <div>
          Name: {this.state.name}<br />
          Age: {this.state.age}<br />
          isChecked: {this.state.isChecked ? '동의' : '동의 안함'}<br />
          Array: {this.state.arr[0]} / {this.state.arr[1]} / {this.state.arr[2]}<br />
          User: {this.state.user.name} / {this.state.user.age} / {this.state.user.address}<br />
        </div>

        <div>
          {this.state.arr.map((item, i) => <span key={i}>{item}, </span>)}
        </div>

        <div>
          <button onClick={this.changeName}>Name</button>
          <button onClick={() => this.chagneAge()}>Age</button>
          <button onClick={this.chagneCheck}>isChecked</button>

          <button onClick={() => this.addArray()}>Add Array</button>
          <button onClick={(evt) => this.updateArray(0, 1000)}>Update Array</button>
          <button onClick={(evt) => this.deleteArray(0)}>Delete Array</button>
        </div>
      </div>
    )
  }
}

export default A02ClassState