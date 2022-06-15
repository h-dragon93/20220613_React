
import React, { Component, createRef } from 'react'

export class A10Currency extends Component {
    constructor() {
        super();

        this.currencies = ['USD', 'EUR', 'KRW'];
        this.rate = {'USD': 1, 'EUR': 1.35, 'KRW': 0.0013};

        // 참조하고자 하는 DOM에 지정한 변수를 할당하면 변수명에 할당한 DOM 객체의 참조값을 바인딩 해 준다
        this.qtyRef = createRef();
    }

    componentDidMount() {
        document.querySelector('input[name="cost"]').style.color = 'orange';
        // console.log(this.qtyRef)
        // this.qtyRef.current가 JavaScript DOM 객체가 반환되므로 이후로는 JavaScript 명령
        this.qtyRef.current.style.backgroundColor = 'orange';
        this.qtyRef.current.focus();
    }
    state = {
        cost: 3,
        qty: 5,
        inCurr: 'USD',
    };

    changeString = (evt) => this.setState({[evt.target.name]: evt.target.value});
    changeNumber = (evt) => {
        let value = evt.target.value;
        if(isNaN(value)) value = '';
        this.setState({[evt.target.name]: value});
    };

    onTotal = () => {
        let total = this.currencies.map(item => {
            let value = (this.state.cost * this.state.qty * this.rate[this.state.inCurr] / this.rate[item]).toFixed(2);
            return <span key={item}>{item}: {value} {' '}</span>
        });
        return total;
    }

    render() {
        return (
            <div>
                <h3>A09 Currency</h3>

                Qty: <input type="text" name="qty" className="form-control"             ref={this.qtyRef}
                    value={this.state.qty} onChange={this.changeNumber}/>
                Cost: <input type="text" name="cost" className="form-control"
                    value={this.state.cost} onChange={this.changeNumber} />
                Country: 
                    <select className="form-control" name="inCurr" 
                        value={this.state.inCurr} onChange={this.changeString}>
                        {this.currencies.map(item => <option key={item}>{item}</option>)}
                    </select>
                <br/>

                <div>Total: {this.state.qty * this.state.cost}</div>
                <div>Total: {this.onTotal()}</div>
            </div>
        )
    }
}

export default A10Currency
