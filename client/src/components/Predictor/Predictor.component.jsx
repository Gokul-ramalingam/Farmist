import React,{ Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import './Predictor.style.scss'

class Predictor extends Component {

constructor(){
    super()
    this.state = {
        result : [],
        toggle: false
    }
}

   componentDidMount(){
       axios.get(`http://localhost:7000/api/predict/details`)
                 .then(result => this.setState({
                     result : result.data,
                     toggle : !this.state.toggle
                 }))
                 .catch(err => this.setState({
                     toggle : !this.state.toggle
                 }))
   }

   render(){
       let items
       if(this.state.result.length > 0)
        items = this.state.result.map((item,index) => <li key={index} className="list">{item.split("-").reverse().join('-')}</li>)
       else
       items = <h3>For the next five days there will be continous rain</h3>
    return (
        <div>
        {
            this.state.toggle? 
            <div className="predictionContainer">
            <h2>Suggested Days</h2>
                 {items}
            </div>
            : 
            <div className="loadingScreen">
               <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
        }
        </div>
    )
   }
}

export default Predictor
