
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function A01Axios() {
    
    const baseURL = 'http://localhost:8080/contacts/';
    const [data, setData] = useState();
    
    const getContactList = (no = 1, size = 10) => {
        axios.get(baseURL, {params: {pageno: no, pagesize: size}})
        .then(resp => {
            console.log(resp);
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => setData(error))
    }
    const getContactListAsync = async (no = 1, size = 10) => {
        try {
            const resp = await axios.get(baseURL, {params: {pageno: no, pagesize: size}});
            setData(resp.data);
        } catch (error) {
            setData(error);
        }
    }
    const getContact = (no) => {
        /*
        axios.get(baseURL + no)
        .then(resp => {
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => setData(error))
        */
       axios({
        method: 'get',
        url: baseURL + no,
        data: ''
       })
       .then(resp => {
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => setData(error))
    }
    const addContact = () => {
        const data = {
            "name":"강감찬",
            "tel":"010-2222-3339",
            "address":"서울시"
        }

        axios.post(baseURL, data)
        .then(resp => {
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => setData(error))
    }
    const updateContact = (no) => {
        const data = {
            "name":"이순신",
            "tel":"010-1111-3339",
            "address":"서울시"
        }

        axios.put(baseURL + no, data)
        .then(resp => {
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => setData(error))
    }
    const deleteContact = (no) => {
        axios.delete(baseURL + no)
        .then(resp => {
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => setData(error))
    }

    useEffect(() => {
        getContactList(1, 10);
    }, []);

    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button onClick={() => getContactList(1, 10)}>DATA LIST</button>
            <button onClick={() => getContactListAsync(2, 10)}>DATA LIST ASYNC</button>
            <button onClick={() => getContact(99)}>GET</button>
            <button onClick={addContact}>ADD</button>
            <button onClick={() => updateContact(1655360450926)}>UPDATE</button>
            <button onClick={() => deleteContact(1655360450926)}>DELETE</button><br />
            <br />
            
            <textarea cols="100" rows="15" defaultValue={JSON.stringify(data, '', 4)}></textarea>
        </div>
    )
}

export default A01Axios
