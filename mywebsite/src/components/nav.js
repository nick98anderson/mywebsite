import React from 'react';
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import {Link, Route } from 'react-router-dom'
import '../styles/navbar.css'

const MainNav = () => {
    return(
        <Nav className='nav'>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link>Github</Nav.Link>
                <Nav.Link>Resume</Nav.Link>
                <Nav.Link>Music</Nav.Link>
        </Nav>
    )
}

export default MainNav;