import React from 'react';
import '../styles/about.css'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../components/navbar'

const About = () => {
    return(
        <div id='about-div'>
            <NavBar/>
            <Jumbotron id='about-jumbotron'>
                <h1>About</h1>
                <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </h5>
            </Jumbotron>
        </div>
    )
}

export default About;