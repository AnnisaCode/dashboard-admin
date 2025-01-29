import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutButton from './LogoutButton';

const MyNavbar = ({ setUser }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <LogoutButton setUser={setUser} />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
