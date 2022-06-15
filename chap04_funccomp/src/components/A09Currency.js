import React, {useState, useCallback, useRef, useEffect} from 'react'

function A09Currency() {

    const currencies = ['USD', 'EUR', 'KRW'];
    const rate = {'USD': 1, 'EUR': 1.35, 'KRW': 0.0015};

    const [data, setData] = useState({
        cost: 3,
        qty: 5,
        inCurr: 'USD',
    });

    const qtyRef = useRef();

    const changeString = useCallback( evt => setData(data => ({...data, [evt.target.name]: evt.target.value})), []);
    const changeNumber = useCallback( evt => setData(data => {
        let value = evt.target.value;
        if(isNaN(value)) value = '';
        return {...data, [evt.target.name]: value};
    }), []);

    const onTotal = () => {
        return currencies.map(item => {
            const value = (data.qty * data.cost * rate[data.inCurr] / rate[item]).toFixed(2);
            return {item, value}
        });
    }

    useEffect(() => {
        qtyRef.current.focus();
        qtyRef.current.style.backgroundColor = 'orange';
    }, [])

    return (
        <div>
            <h3>A09 Currency</h3>

            Qty: <input type="text" name="qty" className="form-control"     ref={qtyRef}
                value={data.qty} onChange={changeNumber} />
            Cost: <input type="text" name="cost" className="form-control" 
                value={data.cost} onChange={changeNumber} />
            Country: 
                <select className="form-control" name="inCurr" value={data.inCurr} onChange={changeString}>
                    {currencies.map(item => <option key={item}>{item}</option>)}
                </select>
            <br/>

            <div>Total: {data.qty * data.cost}</div>
            <div>Total: {onTotal().map(country => <span key={country.item}>{country.item}: {country.value} {' '}</span>)}</div>
        </div>
    )
}

export default A09Currency;
