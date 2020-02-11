import React from 'react';
import HomeNav from '../components/nav'
import '../styles/home.css'
import {Jumbotron, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className='body'>
            <Jumbotron className='jumbotron'>
                <h1>Nick Anderson</h1>
                <h4>Computing Science | University of Alberta</h4>
            </Jumbotron>
            <Nav className='nav'>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link>Github</Nav.Link>
                <Nav.Link>Resume</Nav.Link>
                <Nav.Link>Music</Nav.Link>
            </Nav>
        </div>
    )
}
export default Home;