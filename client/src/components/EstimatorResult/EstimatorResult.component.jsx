import React from 'react'
import './EstimatorResult.style.scss'
const EstimatorResult = (props) => {
    const { crop,currentprice,city,duration,machinary,worker,fertilizer,total } = props.data
    return (
        <div className="estimationResult">
        <b>crop                 :       {crop}</b><br/>
        <b>currentprice    :       {currentprice}</b><br/>
        <b>city                   :       {city}</b><br/>
        <b>duration           :       {duration}</b><br/>
        <b>machinary       :       {machinary}</b><br/>
        <b>worker              :       {worker}</b><br/>
        <b>Fertilizer           :       {fertilizer}</b><br />
        <b>Total                 :        {total}</b><br />
        </div>
    )
}

export default EstimatorResult
