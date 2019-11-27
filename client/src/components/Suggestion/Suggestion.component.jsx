import React from 'react'
import './Suggestion.style.scss'
import Items from '../SuggestedItems/SuggestedItems.component'

const Suggestion = () => {
    return (
        <div>
            <h3 className="suggestion">Suggested Crops</h3>
            <Items>One</Items>
            <Items>Two</Items>
            <Items>Three</Items>
            <Items>Four</Items>
        </div>
    )
}

export default Suggestion