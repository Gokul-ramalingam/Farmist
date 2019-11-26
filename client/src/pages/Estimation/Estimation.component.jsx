import React from 'react'
import Estimator from '../../components/Estimator/Estimator.component'
import Menu from '../../components/Menu/Menu.component'
import Header from '../../components/Header/Header.component'
import './Estimation.style.scss'

const Estimation = () => {
    return (
        <div className="estimation">
            <Menu />
            <Header />
            <Estimator />
        </div>
    )
}

export default Estimation
