
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function A01Axios() {
    
    const baseURL = 'http://localhost:8080/contacts/';
    const [data, setData] = useState();
    
    const getContactList = (no, size) => {
        axios.get(baseURL, {params: {pageno: no, pagesize: size}})
        .then(resp => {
            console.log(resp);
            setData(resp.data);     // 실질적인 값은 data 속성에 있음
        })
        .catch(error => console.error(error))
    }

    useEffect(() => {
        getContactList(1, 10);
    }, []);

    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button>DATA LIST</button>
            <button>DATA LIST ASYNC</button>
            <button>GET</button>
            <button>ADD</button>
            <button>UPDATE</button>
            <button>DELETE</button><br />
            <br />
            
            <textarea cols="100" rows="15" defaultValue={JSON.stringify(data, '', 4)}></textarea>
        </div>
    )
}

export default A01Axios
