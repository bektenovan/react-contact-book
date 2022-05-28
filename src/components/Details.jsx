import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = ({ oneContact, getOneContact }) => {
    const [loading, setLoading] = useState(true)
    const params = useParams()//возвращяет объект в котором хъранится id
    useEffect(() => {
        getOneContact(params.id)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div className='show'>
            <div><h2>Details: </h2></div>
            <div>{oneContact ? <div>
                <div>{oneContact.name}</div>
                <div>{oneContact.lastName}</div>
                <div>{oneContact.phone} </div>
            </div> : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}</div>
        </div>
    );
};

export default Details;