import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./AddContacts.css"

const AddContacts = ({ handleAddContact }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    function handleClick() {
        let newContact = {
            name,
            lastName,
            phone
        }
        // console.log(newContact);
        handleAddContact(newContact);
    }

    return (
        <div >
            <div className='form' >
                <img src="https://i.pinimg.com/originals/df/80/dc/df80dc1689a511d6cbafa2f30c9a6648.gif" alt="" />
                <h2>Add contacts!</h2>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
                <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last name' />
                <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Phone' />
                <Link to='/'>
                    <button onClick={() => handleClick()}>Save</button>
                </Link>

            </div>
        </div>

    );
};

export default AddContacts;