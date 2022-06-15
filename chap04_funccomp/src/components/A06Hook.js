import React, {useReducer, useCallback, useEffect} from 'react'

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'CHANGE_NUMBER':
            let value = Number(action.value);
            if(isNaN(value)) value = '';
            return {...state, [action.name]: value};
        case 'CHANGE_STRING':
            return {...state, str: action.payload};
        case 'ADD_LIST':
            return {...state, list: state.list.concat(state.avg)};
        default:
            return state;
    }
    // return state;
}
const A06Hook = () => {

    // data => state에 등록될 변수
    // dispatch => state에 등록되어 있는 값을 변경할 메서드( 호출되면 지정한 메서드[reducer]가 호출)
    // reducer 함수에서 return 값으로 data 갱신(state값이 갱신) => 화면 리 렌더링
    const [data, dispatch] = useReducer(reducer, {
        num: '',
        str: 0,
        today: new Date(),
        avg: '',
        list: []
    });

    const changeString = useCallback( (evt) => dispatch({type: 'CHANGE_STRING', payload: evt.target.value}), []);
    const changeNumber = useCallback( (evt) => dispatch({type: 'CHANGE_NUMBER', name: evt.target.name, value: evt.target.value}), []);
    const addList = useCallback( () => dispatch({type: 'ADD_LIST'}), []);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'CHANGE_TODAY', payload: new Date()})
        }, 3000);
    }, []);

    return (
        <div>
            <h3>A06. Reducer</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" 
                        value={data.num} onChange={changeNumber} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control" 
                        value={data.str} onChange={changeString} /><br />

                Today: {data.today.toLocaleString()} <br />
                <br />

                Avg: {Array.from(data.list).join(' - ')}
                    <div className="input-group">
                        <input type="text" name="avg" className="form-control"
                            value={data.avg} onChange={changeNumber} />
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
            </div>
        </div>
    )
}

export default A06Hook
