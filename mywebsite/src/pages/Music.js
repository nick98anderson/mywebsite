import React from 'react'
import video from '../content/Video.m4v'
import '../styles/music.css'
import NavBar from '../components/navbar'
import { Nav } from 'react-bootstrap'

class Music extends React.Component{
    render(){
        return(
            <div>
                <video replay='true' autoplay='autoplay' muted='muted' id='video'>
                    <source src={video} type='video/mp4'/>
                </video>
                <NavBar/>
            </div>
        );
    }
}

export default Music;