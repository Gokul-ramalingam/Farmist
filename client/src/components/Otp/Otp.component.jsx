import React,{Component} from 'react'
import './Otp.style.scss'

class Otp extends Component{
    constructor()
    {
        super()
        this.state = {
            otp : ''
        }
    }


    handleChange = event =>{
         this.setState({
             otp : event.target.value
         })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
    }

    render(){
    const otp = this.state.otp;
    console.log(this.props)
    return (
        <div>
        <input type="text" 
        className="otp text-center col-10 col-md-3" 
        name="otp" 
        value={otp} 
        onChange = {this.handleChange}
        placeholder="Enter Otp"/>
        <br />
            <button id="signInButton" className="signin" onClick={this.handleSubmit}>Verify</button>
        </div>
    )
    }
}

export default Otp
