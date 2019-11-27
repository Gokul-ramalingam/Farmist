import React from 'react'
import './Input.style.scss'

const Input = (props) => {
    return (
       <input type="text" 
            className="crop"
            name="crop"
            value={ props.crop }
            onChange = { (event) => props.change(event)}
            placeholder="Enter crop name"
            />
    )
}

export default Input
