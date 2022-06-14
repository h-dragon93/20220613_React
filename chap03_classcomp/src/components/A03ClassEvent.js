
import React, { Component } from 'react'

export class A03ClassEvent extends Component {

    // state를 생성자 메서드 밖에서 사용할때 정의 방법
    state = {
        name: 'NolBu',
        age: 30,
        date: '2021-12-25',
        sports: 'baseball',
        language: new Set(['Angular', 'Vue']),
        isChecked: true,
        baseball: 'NC',
        four: [],
    };
    
    changeName = (evt) => this.setState({name: evt.target.value});
    changeString = (evt) => this.setState({[evt.target.name]: evt.target.value});
    changeNumber = (evt) => {
        let value = Number(evt.target.value);
        if(isNaN(value)) value = '';
        this.setState({[evt.target.name]: value});
    }
    changeCheck = () => this.setState({isChecked: !this.state.isChecked});
    changeLanguage = (evt) => {
        const value = evt.target.value;
        if (this.state.language.has(value)) {
            this.state.language.delete(value);
        } else {
            this.state.language.add(value);
        }
        const newLang = Array.from(this.state.language);
        this.setState({language: new Set(newLang)})
    }
    changeSelect = (evt) => {
        const options = Array.from(evt.target.selectedOptions);     // 유사 배열.
        const data = options.map(item => item.value);
        this.setState({four: data});
    }

    sendDate = (evt) => {
        // HTML 요소가 내장하고 있는 JavaScript 명령을 취소(실행하지 않음)한다.
        evt.preventDefault(); 

        const data = {
            ...this.state,
            language: Array.from(this.state.language)
        }
        
        // Ajax를 이용해서 서버에 전송.
        console.log(data);
    }

    render() {
        return (
            <div>
                <h3>A03 Class Component Event & Form</h3>

                <form>
                    Name: {this.state.name}
                        <input type="text" name="name" className="form-control" 
                            defaultValue={this.state.name} onChange={this.changeName} />
                    Age: {this.state.age + 100} 
                        <input type="text" name="age" className="form-control" 
                            value={this.state.age} onChange={this.changeNumber} />
                    Date: {this.state.date}
                        <input type="date" name="date" className="form-control" 
                            value={this.state.date} onChange={this.changeString} />

                    RadioButton: {this.state.sports}<br />
                        <div className="form-check">
                            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" 
                                onChange={this.changeString} defaultChecked={this.state.sports === 'baseball'} />
                            <label htmlFor="baseball" className="form-check-label">야구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                                onChange={this.changeString} defaultChecked={this.state.sports === 'soccer'} />
                            <label htmlFor="soccer" className="form-check-label">축구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                                onChange={this.changeString} defaultChecked={this.state.sports === 'basketball'} />
                            <label htmlFor="basketball" className="form-check-label">농구</label>
                        </div>

                    CheckBox One: {this.state.isChecked ? '동의' : '동의 안함'}<br />
                        <div className="form-check">
                            <input type="checkbox" id="check" className="form-check-input" 
                                defaultChecked={this.state.isChecked} onChange={this.changeCheck} />
                            <label htmlFor="check" className="form-check-label">동의</label>
                        </div>

                    CheckBox: { Array.from(this.state.language) } <br />
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                                defaultChecked={this.state.language.has('Angular')} onChange={this.changeLanguage} />
                            <label htmlFor="baseball" className="form-check-label">앵귤러</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
                                defaultChecked={this.state.language.has('React')} onChange={this.changeLanguage}  />
                            <label htmlFor="react" className="form-check-label">리엑트</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                                defaultChecked={this.state.language.has('Vue')} onChange={this.changeLanguage}  />
                            <label htmlFor="vue" className="form-check-label">뷰</label>
                        </div>

                    SelectBox: {this.state.baseball}<br/>
                        <select name="baseball" className="form-control" 
                            value={this.state.baseball} onChange={this.changeString} >
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    
                    SelectBox Multi: {Array.from(this.state.four) }<br />
                        <select name="four" multiple size="3" className="form-control"
                            value={this.state.four} onChange={this.changeSelect} >
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    <br />

                    <button type="submit" onClick={this.sendDate}>SEND</button>
                </form>
            </div>
        )
    }
}

export default A03ClassEvent
