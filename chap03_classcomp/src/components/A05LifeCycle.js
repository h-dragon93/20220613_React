
import React, { Component } from 'react'

export class A08LifeCycle extends Component {

    constructor() {
        super();

        this.state = {
            color: 'green'
        };
        console.log('1. Constructor');
    }

    static getDerivedStateFromProps(props, state) {     // VM props, state
        console.log('2. getDerivedStateFromProps');
        console.log(state, props);

        if (props.isChecked) {
            state.color = 'orange';
            state.name = 'NolBu';
        }

        return state;
    }

    componentDidMount() {
        console.log('4. componentDidMount');
        // DOM이 완성된 후라 Ajax 요청해서 DOM에 반영이 가능한 시점...
    }

    // Update
    shouldComponentUpdate(props, state) {
        console.log('5 shouldComponentUpdate');

        // true => 빠꾼 값을 기반으로 리 렌더링
        // false => 값이 바뀌어도 리 렌더링 실행하지 않음
        return true;
    }

    componentDidUpdate() {
        // update가 완료된 후 실행
        console.log('6 componentDidUpdate')
    }

    changeColor = () => {
        this.setState({color: 'red'})
    }

    render() {
        console.log('3. render')
        return (
            <div>
                <h3>A05 Life Cycle</h3>

                color: {this.props.isChecked ? 'T' : 'F'} / {this.state.color} / {this.state.name}
                <br />
                
                <button onClick={this.changeColor}>Click</button>
            </div>
        )
    }
}

export default A08LifeCycle
