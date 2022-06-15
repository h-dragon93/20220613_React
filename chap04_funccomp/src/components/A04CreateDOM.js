
import React, { useState, useRef } from 'react'

function A04CreateDOM() {
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

    // 객체를 리퍼런스 할 목적과 Keeping 되는 변수를 선언할 목적 2가지 형태로 사용된다.
    const cnt = useRef(4);

    const [baseObject, setBaseObject] = useState([
        {id: 1, team: 'NC', value: 'NC'},
        {id: 2, team: '두산', value: 'Doosan'},
        {id: 3, team: '엘지', value: 'LG'},
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        team:'',
        isChecked: false,
    });

    const changeValue = (evt) => setData({...data, [evt.target.name]: evt.target.value});
    const addTeam = () => setBaseObject(baseObject.concat({id: cnt.current++, team: '삼성', value:"Samsung"}))
    const showHide = () => setData({...data, isChecked: !data.isChecked});
    const addArray = () => baseArray.push(data.team);

    return (
        <div>
            <h3>A04 Make DOM</h3>
            
            SelectBox: {data.teamOne}<br/>
            <select name="teamOne" className="form-control" onChange={changeValue}>
                <option>선택해주세요</option>
                {baseArray.map( (item, i) => <option key={i}>{item}</option>) }
            </select>

            SelectBox: {data.teamTwo}<br/>
            <select name="teamTwo" className="form-control" onChange={changeValue}>
                <option value="">선택해주세요</option>
                {baseObject.map( item => <option key={item.id} value={item.value}>{item.team}</option>) }
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {baseObject.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.team}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button><br />
            <br />
            { data.isChecked && 
                <div className="input-group">
                    <input type="text" className="form-control" name="team" value={data.team} onChange={changeValue} />
                    <button className="btn btn-outline-primary btn-sm" onClick={addArray}>ADD</button>
                </div>
            }
            <br />
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default A04CreateDOM
