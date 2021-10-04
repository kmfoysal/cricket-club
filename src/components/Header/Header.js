import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" sticky='top' className='menu-bar'>
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt="logo"
                src={Logo}
                height='50'
                className="d-inline-block"
                />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className='menu-link'>Home</Nav.Link>
                    <Nav.Link href="#link" className='menu-link'>About Us</Nav.Link>
                    <Nav.Link href="#link" className='menu-link'>Services</Nav.Link>
                    <Nav.Link href="#link" className='menu-link'>Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
           </Navbar>
    );
};

export default Header;