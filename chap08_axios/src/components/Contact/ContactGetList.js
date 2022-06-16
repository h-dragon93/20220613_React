
import React from 'react'

const GetContactList = (props) => {

    const {contactList} = props;

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList.contacts.map(contact => (
                        <tr key={contact.no}>
                            <td>{contact.no}</td>
                            <td>{contact.name}</td>
                            <td>{contact.tel}</td>
                            <td>{contact.address}</td>
                            <td><img src={contact.photo} width="50px" alt="증명사진" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetContactList
