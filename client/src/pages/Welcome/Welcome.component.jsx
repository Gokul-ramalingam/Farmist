import React from 'react'
import Background from '../../assets/background1.mp4'
import './Welcome.component.scss'
const Welcome = () => {
    return (
        <div>
        <video src={Background} id="home-bg-video" autoPlay loop muted></video>
             <h1 className = "mainTitle"><b>Farm</b><b className="subTitle">ist</b></h1> 
             <h2 className="text"><b>Get twice the productivity, 
             <br/>we assist you to manage 
             <br/>your day to day activity</b></h2>
             <button className="details">Start Managing</button>
        </div>
    )
}

export default Welcome
