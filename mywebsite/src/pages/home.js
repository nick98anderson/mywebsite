import React from 'react';
import MainNav from '../components/nav'

import '../styles/home.css'
import {Jumbotron, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div className='vid body'>
            <Jumbotron className='jumbotron'>
                <h1>Nick Anderson</h1>
                <h4>Computing Science | University of Alberta</h4>
            </Jumbotron>
            <MainNav id='nav'/>
        </div>
    )
}
export default Home;