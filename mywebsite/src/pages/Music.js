import React from 'react'
import video from '../content/video.MOV'

class Music extends React.Component{
    render(){
        return(
            <div>
                <video src={video}>
                </video>
            </div>
        );
    }
}

export default Music;