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
        const { confirmationResult,toggle } = this.props

        confirmationResult.confirm(this.state.otp)
                                           .then((result) =>{
                                               console.log("here");
                                               toggle();
                                           })
                                           .catch(err => console.log("here"))
    }

    render(){
    const otp = this.state.otp;
    return (
        <div>
        <input type="text" 
        className="otp text-center col-10 col-md-3" 
        name="otp" 
        value={otp} 
        onChange = {this.handleChange}
        placeholder="Enter Otp"/>
        <br />
            <button id="otpVerifyButton" className="otpButton" onClick={this.handleSubmit}>Verify</button>
        </div>
    )
    }
}

export default Otp
