import React,{ useState } from 'react'
import './Estimator.style.scss'

const Estimator = (props) => {
    const [ cropName,setCropName ] = useState('');
    const [ noOfAcres,setNoOfAcres ] = useState('');

    return (
        <div className="estimator">
            <h4 className="title"><b>Estimator</b></h4>
            <input type="text" 
            className="cropName" 
            name="cropName" 
            value={ cropName } 
            onChange={ event => setCropName(event.target.value) }
            placeholder="Crop Name" />
            <input type="text" 
            className="noOfAcres" 
            name="noOfAcres" 
            value={ noOfAcres } 
            onChange={ event => setNoOfAcres(event.target.value) }
            placeholder="Number of acres" /><br/>
            <button id="estimateButton" className="estimateButton">Estimate</button>
        </div> 
    )
}

export default Estimator
