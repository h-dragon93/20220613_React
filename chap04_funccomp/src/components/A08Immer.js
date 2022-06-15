// npm i immer
import React, { useState, useCallback } from 'react'
import produce from 'immer'

function A08Immer() {
    const [person, setPerson] = useState({
        name: '',
        info: {
            address: '',
            tel: [10, 20, 30],
            etc: {
                one: '',
                two: ''
            }
        }
    });

    // setXXX(value)
    // setXXX( (state변수) => 로직 )
    const changeName = useCallback( () => setPerson(person => ({...person, name: 'HungBu'})), []);
    const changeAddress = useCallback( () => setPerson(person => ({
        ...person,
        info: {
            ...person.info,
            address: 'Busan'
        }
    })) ,[]);
    const changeOne = useCallback( () => setPerson(person => ({
        ...person,
        info: {
            ...person.info,
            etc: {
                ...person.info.etc,
                one: '댑따리 복잡하네...'
            }
        }
    })), []);
    const addArray = useCallback( () => setPerson(person => ({
        ...person,
        info: {
            ...person.info,
            tel: person.info.tel.concat(100)
        }
    })), []);


    // immer
    /*
    const changeNameImmer = useCallback( value => {
        const item = produce(person, draft => {
            draft.name = value;
        });
        console.log(item);
        setPerson(item)
    }, [person]);
    */
    const changeNameImmer = useCallback( value => {
        setPerson(person => produce(person, draft => {
            draft.name = value;
        }));
    }, []);

    const changeAddressImmer = useCallback( value => {
        setPerson(person => produce(person, draft => {
            draft.info.address = value;
        }));
    }, []);

    const changeOneImmer = useCallback( () => {
        setPerson(person => produce(person, draft => {
            draft.info.etc.one = '간단하네...';
        }));
    }, []);

    const addArrayImmer = useCallback( () => {
        const random = Math.ceil(Math.random() * 100);
        setPerson(person => produce(person, draft => {
            draft.info.tel.push(random);
        }));
    }, []);

    const updateArrayImmer = useCallback( (index, value) => {
        setPerson(person => produce(person, draft => {
            draft.info.tel[index] = value;
        }));
    }, []);

    const deleteArrayImmer = useCallback( (index) => {
        setPerson(person => produce(person, draft => {
            draft.info.tel.splice(index, 1);
        }));
    }, []);

    return (
        <div>
            <h3>A08. Immer</h3>
            
            Name: {person.name}<br />
            Address: {person.info.address}<br />
            One: {person.info.etc.one}<br />
            Ary: {person.info.tel.map( (item, i) => <span key={i}>{item} </span>)}

            <br />
            <button onClick={changeName}>Name</button>
            <button onClick={changeAddress}>Address</button>
            <button onClick={changeOne}>One</button>
            <button onClick={addArray}>ADD</button>
            <br />

            <button onClick={() => changeNameImmer('HangDan')}>Name</button>
            <button onClick={() => changeAddressImmer('Seoul')}>Address</button>
            <button onClick={changeOneImmer}>One</button>

            <button onClick={addArrayImmer}>ADD</button>
            <button onClick={() => updateArrayImmer(0, 1000)}>UPDATE</button>
            <button onClick={() => deleteArrayImmer(0)}>DELETE</button>
        </div>
    )
}

export default A08Immer
