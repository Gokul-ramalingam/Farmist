import React from 'react'
import './StockView.style.scss'
import Chart from '../Chart/Chart.component'

const StockView = (props) => {
    return (
        <div className="stockView">
             <h3 className="stockType">{ props.children }</h3>
             <Chart />
        </div>
    )
}

export default StockView
