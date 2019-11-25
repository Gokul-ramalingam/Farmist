import React from 'react'
import Button from '../Button/Button.component'
import './Option.style.scss'
const Option = (props) => {
    return(
        <div className="option">
            <p className="description">{props.children}</p>
            <Button type={props.name}/>
        </div>
    )
}

export default Option