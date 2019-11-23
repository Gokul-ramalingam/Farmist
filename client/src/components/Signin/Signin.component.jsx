import React,{ Component } from 'react'
import { auth } from '../Firebase/Firebase.util'
import firebase from '../Firebase/Firebase.util'
import './Signin.style.scss'

class Signin extends Component {
    
    constructor(){
        super();
        this.state = {
            mobile : ''
        }
    }

    handleChange = event => {
    const {name,value} = event.target
    this.setState({
        [name] : value
    })
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const mobile = this.state.mobile;
        let phoneNumber = "+91"+mobile;
        let appVerifier = window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('signInButton', {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log(response)
            }
          });

        auth.signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) =>{
                             console.log(confirmationResult)
                            })
                .catch(err => console.log(err))
}

    render(){
        const mobile = this.state.mobile;
        return(
            <div className="signIn">
            <input type="mobile" 
            className="mobile col-10 col-md-3" 
            name="mobile" 
            value={mobile} 
            onChange = {this.handleChange}
            placeholder="Enter mobile number"/>
            <br />
            <button id="signInButton" className="signin" onClick={this.handleSubmit}>Sign In</button>
            <br />
            <br />
            <span className="alternate">New to Farmist? <b className="toggleSignup" onClick={this.props.toggle}>Register</b></span>
            </div>
        )
    }
}

export default Signin