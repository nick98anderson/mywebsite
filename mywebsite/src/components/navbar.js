import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'


const NavBar = () => {
    return(
        <Navbar>
            <Nav>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Github</Nav.Link>
                <Nav.Link>Resume</Nav.Link>
                <Nav.Link>Music</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;
