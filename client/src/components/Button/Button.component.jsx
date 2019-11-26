import React from 'react'
import { withRouter } from 'react-router-dom'
import './Button.style.scss'

const Button = (props) => {
   return(
       <button className="optionButton" onClick={()=>props.history.push(props.type.toLowerCase())}>{props.type}</button>
   )
}

export default withRouter(Button)