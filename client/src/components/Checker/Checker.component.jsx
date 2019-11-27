import React,{ useState } from 'react'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'
import Input from '../Input/Input.component'
import './Checker.style.scss'

const Checker = () => {

const [ crop,setCrop ] = useState('');

let handleChange = (event) =>{
 setCrop(event.target.value)
}

    return (
        <div className="checker">
            <Input change={handleChange} crop={crop}/>
            <CircularProgressBar />
        </div>
    )
}
 
export default Checker