import React from 'react'
import Header from '../../components/Header/Header.component'
import Menu from '../../components/Menu/Menu.component'
import './Homepage.component.scss'
import Option from '../../components/Option/Option.component'
const Homepage = () => {
    return (
        <div>
        <Menu />
        <Header />
        <div className="options">
        <Option name="Estimate">Estimate and regulate your 
        day to day activities</Option>
        <Option name="Predict">Predict the right time to inject 
        fertilizers in your land</Option>
        <Option name="Check">Check the availability of 
        crops in your location</Option>
        <Option name="View">Instant update on stock details at one click</Option>
        </div>
        </div>
    )
}

export default Homepage
