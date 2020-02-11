import React from 'react';
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import {Link, Route } from 'react-router-dom'
import '../styles/navbar.css'

const HomeNav = () => {
    return(
        <Navbar>
            <Nav className="navbar navbar-dark">
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Resume</Nav.Link>
                <Nav.Link>Github</Nav.Link>
                <Nav.Link>Music</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default HomeNav;