import React,{ Component } from 'react'
import { auth } from '../Firebase/Firebase.util'
import firebase from '../Firebase/Firebase.util'
import Otp from '../Otp/Otp.component'
import './Signin.style.scss'

class Signin extends Component {
    
    constructor(){
        super();
        this.state = {
            mobile : '',
            switchComponent : true,
            confirmationResult : {}
        }
    }

    handleToggle = () =>{
        this.setState({
            switchComponent : !this.state.switchComponent
        })
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
                             this.setState({
                                 confirmationResult : confirmationResult,
                                 switchComponent : false
                             })
                            })
                .catch(err => console.log(err))
}

    render(){
        const { mobile,switchComponent } = this.state;
        return(
            <div className="signIn">
            {
           switchComponent?
            <div>
            <input type="mobile" 
            className="mobile col-10 col-md-3" 
            name="mobile" 
            value={mobile} 
            onChange = {this.handleChange}
            placeholder="Enter mobile number"/>
            <br />
            <button id="signInButton" className="signin" onClick={this.handleSubmit}>Sign In</button>
            </div>
            : <Otp confirmationResult={this.state.confirmationResult} toggle={this.handleToggle}/>
            }
            </div>
        )
    }
}

export default Signin