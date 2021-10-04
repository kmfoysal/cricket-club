import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" sticky='top' className='menu-bar bg-warning'>
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
                    
                    <NavLink to="/home" className='nav-link menu-link'>Home</NavLink>
                    <NavLink to="/about" className='nav-link menu-link'>About</NavLink>
                    <NavLink to="/services" className='nav-link menu-link'>Services</NavLink>
                    <NavLink to="/contact" className='nav-link menu-link'>Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
           </Navbar>
    );
};

export default Header;