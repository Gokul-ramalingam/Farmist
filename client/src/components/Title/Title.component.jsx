import React from 'react'
import AuthenticationImage from '../../assets/authentication.png'
import './Title.component.scss'

const Title = () =>{
    return(
        <div  className="titleContainer row">
        <div className="col data">
        <h1 className="mainTitle"><b>Farm</b><b className="subTitle">ist</b></h1>
        </div>
        </div>
    )
}

export default Title;