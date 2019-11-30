import React from 'react'
import Background from '../../assets/background1.mp4'
import './Welcome.component.scss'
import { withRouter } from 'react-router-dom'

const Welcome = (props) => {
    return (
        <div>
        <video src={Background} id="home-bg-video" autoPlay loop muted></video>
             <h1 className = "mainTitle1"><b>Farm</b><b className="subTitle1">ist</b></h1> 
             <h2 className="text"><b>Get twice the productivity, 
             <br/>we assist you to manage 
             <br/>your day to day activity</b></h2>
             <button className="details" onClick={()=>  props.history.push('/authentication')}>Start Managing</button>
        </div>
    )
}

export default withRouter(Welcome)
