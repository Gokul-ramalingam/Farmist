import React,{ useState } from 'react'
import './StockView.style.scss'
import Chart from '../Chart/Chart.component'
import Input from '../Input/Input.component'

const StockView = (props) => {

const [ crop,setCrop ] = useState('');

let handleChange = (event) =>{
 setCrop(event.target.value)
}

    return (
        <div className="stockView">
             <Input change={handleChange} crop={crop}/>
             <Chart title= "Stock In City" type="Doughnut"/>
             <Chart title= "Stock In State" type="Bar"/>
             <Chart title= "Stock In Country" type="Pie"/>
        </div>
    )
}

export default StockView