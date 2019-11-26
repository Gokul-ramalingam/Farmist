import React,{ useState } from 'react'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'
import './Checker.style.scss'

const Checker = () => {

const [ crop,setCrop ] = useState('');

    return (
        <div className="checker">
            <input type="text" 
            className="crop"
            name="crop"
            value={ crop }
            onChange = { event => setCrop(event.target.value)}
            placeholder="Enter crop name"
            />
            <CircularProgressBar />
        </div>
    )
}
 
export default Checker