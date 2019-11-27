import React from 'react'
import StockView from '../../components/StockView/StockView.component'
import Menu from '../../components/Menu/Menu.component'
import Header from '../../components/Header/Header.component'

const StockDetails = () => {
    return (
        <div>
            <Menu />
            <Header />
            <StockView>Stock In City</StockView>
            <StockView>Stock In State</StockView>
            <StockView>Stock In Country</StockView>
        </div>
    )
}

export default StockDetails
