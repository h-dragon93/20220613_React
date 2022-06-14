
import React, { PureComponent } from 'react'

// PureComponent는 기본형 state의 변수 값이 동일한 값으로 변경 변경 작업을 하지 않는 컴퍼넌트
class A06PureComponent extends PureComponent {
    
    constructor(props){
        super(props);

        this.state = {
            name: 'NolBu',
            ary: ['React', 'Angular', 'Vue']
        }
    }

    changeName = () => {
        this.setState({name: 'NolBu'});
    }
    changeObject = () => {
        this.setState({ary: ['React', 'Angular', 'Vue']})
    }

    // PuerComponent는 이 메서드가 이미 재 정의 되어 있음( 같은 값이 넘어오면 false가 리턴)
    // 따라서 PuerComponent를 사용할 수 없다
    /*
    shouldComponentUpdate(props, state) {
        return true;
    }
    */

    render() {
        console.log("---------- render() Method ----------")
        return (
            <div>
                <h3>A06 PureComponent</h3>

                <div>
                    Name: {this.state.name} <br />
                    Ary: {this.state.ary[0]}<br />

                    <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
                    <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
                </div>
            </div>
        )
    }
}

export default A06PureComponent
