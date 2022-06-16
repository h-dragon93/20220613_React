import React, {useState, useEffect} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios'

import ContactHeader from './Contact/ContactHeader'
import ContactHome from './Contact/ContactHome'
import ContactAdd from './Contact/ContactAdd'
import ContactUpdate from './Contact/ContactUpdate'
import ContactGet from './Contact/ContactGet'
import ContactGetList from './Contact/ContactGetList'

function ContactApp() {

    const [contactList, setContactList] = useState({pageno: '', pagesize: '', totalcount: '', contacts: []});
    const [contact, setContact] = useState({no: '', name: '', tel: '', address: '', photo: ''});
    const navigate = useNavigate();

    const baseURL = 'http://localhost:8080/contacts/';

    const getContactList = (no=1, size=10) => {
        axios.get(baseURL, {params: {pageno: no, pagesize: size}})
        .then(resp => setContactList(resp.data))
        .catch(error => console.error(error));
    };
    const getContact = (no) => {
        axios.get(baseURL + no)
        .then(resp => {
            setContact(resp.data);
            navigate('/getContact');
        })
        .catch(error => console.error(error));
    };

    useEffect(() => {
        getContactList();
    }, [])

    return (
        <div>
            <ContactHeader />
            <br />
            
            <Routes>
                <Route path="/"                 element={<ContactHome />}  />
                <Route path="/getContactList"   element={<ContactGetList contactList={contactList} getContact={getContact} /> } />
                <Route path="/getContact"       element={<ContactGet contact={contact}/>} />
                <Route path="/addContact"       element={<ContactAdd /> } />
                <Route path="/updateContact"    element={<ContactUpdate /> } />
                <Route                          element={<h3>Not Found</h3>} />
            </Routes>
        </div>
    )
}

export default ContactApp
