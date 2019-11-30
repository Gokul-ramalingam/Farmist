import React,{ useState } from 'react'
import axios from 'axios'
import EstimationResult from '../EstimatorResult/EstimatorResult.component'
import './Estimator.style.scss'

const Estimator = (props) => {
    const [ cropName,setCropName ] = useState('');
    const [ noOfAcres,setNoOfAcres ] = useState('');
    const [ toggle, setToggle ] = useState(true);
    const [ result, setResult ] = useState({});

 let handleSubmit = () => {
    axios.get(`http://localhost:7000/api/estimate/find/${cropName}/${noOfAcres}`)
              .then((result) =>{
                  setResult(result)
                  setToggle(false)
              })
              .catch(err => console.log(err))
 }

    return (
        <div>
        {
         toggle?
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
            <button id="estimateButton" className="estimateButton" onClick={handleSubmit}>Estimate</button>
        </div> 
        : <EstimationResult data={result.data}/>
        }
        </div>
    )
}

export default Estimator
