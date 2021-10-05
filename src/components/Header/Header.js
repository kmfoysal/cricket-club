import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    const activeLink = {fontWeight:'bold', color:'#ffffff', textTransform:'uppercase'}

    return (
        <Navbar expand="lg" sticky='top' className='menu-bar bg-warning'>
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt="logo"
                src={Logo}
                height='40'
                className="d-inline-block"
                />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    
                    <NavLink to="/home" className='nav-link menu-link' activeStyle={activeLink}>Home</NavLink>
                    <NavLink to="/about" className='nav-link menu-link' activeStyle={activeLink}>About</NavLink>
                    <NavLink to="/services" className='nav-link menu-link' activeStyle={activeLink}>Services</NavLink>
                    <NavLink to="/contact" className='nav-link menu-link' activeStyle={activeLink}>Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
           </Navbar>
    );
};

export default Header;