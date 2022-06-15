import React, {useState} from 'react'

function A03FuncEvent() {

    const [data, setData] = useState({
        name: '',
        age: '',
        date: '2022-12-25',
        sports: 'soccer',
        isChecked: true,
        language: new Set(['Angular', 'Vue']),
        baseball: '엘지',
        four: ['NC', '엘지'],
    });

    const changeString = (evt) => setData( {...data, [evt.target.name]: evt.target.value} );
    const changeNumber = (evt) => {
        let value = Number(evt.target.value);
        if (isNaN(value)) value = '';
        setData({...data, [evt.target.name]: value});
    }
    const changeCheck = () => setData({...data, isChecked: !data.isChecked});
    const changeLanguage = (evt) => {
        const value = evt.target.value;
        if (data.language.has(value)) {
            data.language.delete(value);
        } else {
            data.language.add(value);
        }
        const newLang = Array.from(data.language);
        setData({...data, language: new Set(newLang)})
    }
    const changeSelect = (evt) => {
        const elem = Array.from(evt.target.selectedOptions);
        const newElem = elem.map(item => item.value);
        setData({...data, four: newElem});
    }
    const sendData = (evt) => {
        evt.preventDefault();
        const send = {
            ...data,
            language: Array.from(data.language)
        }
        console.log(send);
    }

    return (
        <div>
            <h3>A03 Function Component Event & Form</h3>

            <form>
                Name: {data.name}
                    <input type="text" name="name" className="form-control" 
                        defaultValue={data.name} onChange={changeString} />
                Age: {data.age}
                    <input type="text" name="age" className="form-control" 
                        value={data.age} onChange={changeNumber} />
                Date: {data.date}
                    <input type="date" name="date" className="form-control" 
                       value={data.date} onChange={changeString} />

                RadioButton: {data.sports}<br />
                    <div className="form-check">
                        <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" 
                            onChange={changeString} defaultChecked={data.sports === 'baseball'} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                            onChange={changeString} defaultChecked={data.sports === 'soccer'}  />
                        <label htmlFor="soccer" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
                            onChange={changeString} defaultChecked={data.sports === 'basketball'}  />
                        <label htmlFor="basketball" className="form-check-label">농구</label>
                    </div>

                CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
                    <div className="form-check">
                        <input type="checkbox" id="check" className="form-check-input" 
                            value={data.isChecked} onChange={changeCheck} defaultChecked={data.isChecked}/>
                        <label htmlFor="check" className="form-check-label">동의</label>
                    </div>

                CheckBox: {Array.from(data.language).join(' - ')}<br />
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                            defaultChecked={data.language.has('Angular')} onChange={changeLanguage} />
                        <label htmlFor="baseball" className="form-check-label">앵귤러</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
                            defaultChecked={data.language.has('React')} onChange={changeLanguage} />
                        <label htmlFor="react" className="form-check-label">리엑트</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                            defaultChecked={data.language.has('Vue')}  onChange={changeLanguage} />
                        <label htmlFor="vue" className="form-check-label">뷰</label>
                    </div>

                SelectBox: {data.baseball}<br/>
                    <select name="baseball" className="form-control" value={data.baseball} onChange={changeString}>
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                
                SelectBox Multi: {data.four.join(' - ')}<br />
                    <select name="four" multiple size="3" className="form-control" 
                        value={data.four} onChange={changeSelect}>
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                    <br />

                <button type="submit" onClick={sendData}>SEND</button>
            </form>
        </div>
    )
}

export default A03FuncEvent
