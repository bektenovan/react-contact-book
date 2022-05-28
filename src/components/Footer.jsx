import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center mt-100 ">
                        <Navbar.Text>
                            <h2>Contact Book</h2>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;