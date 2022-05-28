import { hover } from '@testing-library/user-event/dist/hover';
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactsList = ({ getContacts, contacts, deleteContact }) => {
    const [selectedContact, setSelectedContact] = useState('');
    const [hover, setHover] = useState('')

    useEffect(() => {
        getContacts()
    }, [])

    return (

        <div>
           
            <div className='info' style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ width: "500px", height: '400px', marginTop: "130px" }}>
                    <h1>Welcome to ContactBook!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum sunt voluptatibus ex iure nostrum at, perspiciatis omnis itaque aut soluta explicabo ab voluptate aliquam ratione porro distinctio nesciunt sit?
                        Ad, iste deserunt est quia voluptatum vitae facilis tenetur, facere eligendi ipsam voluptas dignissimos sunt voluptates cum. Ipsum harum provident tempore beatae? Saepe adipisci omnis ad pariatur commodi modi nam!</p>
                </div>
                <img src="https://finwave.co/images/gif/Contact-1.gif" alt="" style={{ width: "600px", height: "500px" }} />

            </div>
            <div className='container d-flex justify-content-between ' style={{ backgroundColor: "#46008C", width: "1600px" }}>
                {contacts.map((item) => (
                    <Card
                        key={item.id}
                        onClick={() => setSelectedContact(item.id)}
                        onMouseEnter={() => setHover(item.id)}
                        onMouseLeave={() => setHover("")}
                        style={{
                            width: '18rem',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: "center",
                            marginBottom: "50px",
                            marginTop: "50px",

                            border: selectedContact === item.id ? "1px solid black" : "", backgroundColor: hover === item.id ? "grey" : "white"
                        }}>

                        <Card.Img style={{
                            width: "120px",
                            marginTop: "20px"

                        }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/2048px-Google_Contacts_icon.svg.png" />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Title>{item.lastName}</Card.Title>
                            <Card.Text>
                                {item.phone}
                            </Card.Text>

                            <Link to={`/edit/${item.id}`}>
                                <Button variant="primary">Edit</Button>
                            </Link>
                            <Button onClick={() => deleteContact(item.id)} variant="danger">Delete</Button>
                            <Link to={'/details/' + item.id} >
                                <Button variant="success">Details</Button>
                            </Link>


                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );

};

export default ContactsList;