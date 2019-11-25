import React from 'react'
import './Button.style.scss'

const Button = (props) => {
   return(
       <button className="optionButton">{props.type}</button>
   )
}

export default Button