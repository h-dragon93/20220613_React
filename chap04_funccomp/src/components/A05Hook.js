import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'

const A05Hook = () => {
    // useState() => 값이 유지되는 변수를 정의. 값이 변경되면 변경된 값으로 화면 갱신(리렌더링)
    const [data, setData] = useState({
        num: '',
        str: ''
    });
    const [today, setToday] = useState(new Date());
    const [avg, setAvg] = useState('');
    const [list, setList] = useState([]);

    // useRef => 값이 유지되는 변수를 정의. 값이 변경되도 화면 갱신 작업은 하지 않는다.
    const cnt = useRef(0);
    const numRef = useRef();        // DOM에 ref={numRef} 형식으로 할당

    // method
    // Event method 등록 => useCallback()
    const changeValue = useCallback( (evt) => setData({...data, [evt.target.name]: evt.target.value}), [data]);
    const changeNumber = useCallback( (evt) => setAvg(Number(evt.target.value)), []);
    const addList = useCallback( () => {
        if(avg !== '' || typeof avg === 'number') {
            setList(list.concat(avg))
        }   
    }, [list, avg]);

    const getAverage = (arr) => {
        console.log('계산중...');
        if(arr.length === 0) return 0;
        const total = arr.reduce((sum, value) => sum + value, 0);
        return total / arr.length;
    }

    // useMemo => 일반 메서드를 등록
    const getAverageMemo = useMemo(() => {
        return getAverage(list);
    }, [list])

    // class comp의 componentDidMount(), componentDidUpdate()
    // [] => componentDidMount
    // [] 없음 => componentDidUpdate
    // [state 변수명] => 지정한 변수가 변경된 경우 componentDidUpdate
    useEffect(() => {
        setTimeout(() => {
            setToday(new Date());
        }, 1000);
    }, [data], () => console.log('abc'));   // 최초 이후 변경이 있으면 변경 후에 처리 작업을 등록
    
    // 실행후 VD과 현재 state의 값을 비교하기 위해 1번 더 실행
    useEffect(() => {
        console.log('useRef')
        cnt.current++;              // 2
        numRef.current.style.backgroundColor = 'orange';
    }, [])

    return (
        <div>
            <h3>A05. useState, useEffect: {cnt.current}</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control"      ref={numRef}
                        value={data.num} onChange={changeValue} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control"
                        value={data.num} onChange={changeValue}  /><br />

                Today: {today.toLocaleString()}<br />
                <br />

                Avg: {avg} / {getAverageMemo}
                    <div className="input-group">
                        <input type="text" name="str" className="form-control"
                            value={avg} onChange={changeNumber} />
                        <button className="btn btn-outline-primary btn-sm"
                            onClick={addList}>ADD</button>
                    </div>
                    
                <div>
                    {list.map((item, i) => <span key={i}>{item}{' '}</span>)}
                </div>
            </div>
        </div>
    )
}

export default A05Hook
