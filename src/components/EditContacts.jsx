import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditContact = ({ getOneContact, oneContact, updateContacts }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const params = useParams()
    useEffect(() => {
        getOneContact(params.id)
    }, [])
    // console.log(oneProduct);

    useEffect(() => {
        if (oneContact) {
            setName(oneContact.name)
            setLastName(oneContact.lastName)
            setPhone(oneContact.phone)
        }
    }, [oneContact])

    function handleValues() {
        let editedContact = {
            name,
            lastName,
            phone
        }
        console.log("check");
        updateContacts(params.id, editedContact)
    }



    return (
        <div className='form'>
            <img src="https://i.pinimg.com/originals/df/80/dc/df80dc1689a511d6cbafa2f30c9a6648.gif" alt="" />

            <h2>Edit contacts</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' type="text" />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='lastName' type="text" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone' type="text" />
            <Link to='/'>
                <button onClick={() => handleValues()} >Save</button>
            </Link>

        </div>
    );
};

export default EditContact;