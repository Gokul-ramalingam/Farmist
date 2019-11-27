import React from 'react'
import './SuggestedItems.style.scss'
const SuggestedItems = (props) => {
    return (
        <div className="data">
               {props.children}
        </div>
    )
}

export default SuggestedItems
