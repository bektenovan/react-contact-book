import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation()
    return (
        <Navbar bg="#46008C" expand="lg" style={{ backgroundColor: "#46008C", color: 'white' }}>
            <Container fluid>
                <Navbar.Brand style={{ color: "white" }} href="/">Contact Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className={location.pathname === '/' ? "btn btn-success" : "btn btn-light"} href="/">Homepage</Nav.Link>
                        <Nav.Link className={location.pathname === '/add' ? "btn btn-success" : "btn btn-light"} href="/add">Add contacts</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;