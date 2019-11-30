import React,{ Component } from 'react'
import axios from 'axios'
class Predictor extends Component {
   componentDidMount(){
       axios.get(`http://localhost:7000/api/predict/details`)
   }
   render(){
    return (
        <div>
            <h1>Hello Predictor</h1>
        </div>
    )
   }
}

export default Predictor
