import React,{ Component } from 'react'
import { auth } from '../Firebase/Firebase.util'
import firebase from '../Firebase/Firebase.util'
import Otp from '../Otp/Otp.component'
import './Signup.style.scss'

class Signup extends Component{

  constructor(){
    super()
    this.state = {
      name : '',
      city : '',
      mobile : '',
      switchComponent:true,
      confirmationResult:{}
    }
  }

  handleChange = event => {
   const { name,value } = event.target
   this.setState({
     [name] : value
   })
  }

  handleToggle = () =>{
    this.setState({
        switchComponent : !this.state.switchComponent
    })
}

  handleSubmit = event =>{
    event.preventDefault();
    let phoneNumber = "+91"+this.state.mobile;
    let appVerifier = window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('signUpButton', {
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
     const { name,city,mobile,switchComponent } = this.state;
       return(
           <div className="signUp">
           {
           switchComponent ?
           <div>
             <input type="text" 
             className="name col-10 col-md-3" 
             name="name" 
             value={name} 
             onChange={this.handleChange}
             placeholder="Enter name"/>
             <br />
             <input type="text" 
             className="city col-10 col-md-3" 
             name="city" 
             value={city} 
             onChange={this.handleChange}
             placeholder="Enter city"/>
             <br />
             <input type="mobile" 
             className="mobile col-10 col-md-3" 
             name="mobile" 
             value={mobile} 
             onChange={this.handleChange}
             placeholder="Enter mobile number"/>
             <br />
             <button id="signUpButton" className="register" onClick={this.handleSubmit}>Register</button>
             <br />
             <br />
             <span className="alternate">
             Already a Farmist? <b className="toggleSignin" onClick={this.props.toggle}>Sign In</b></span>
             </div>
             : <Otp confirmationResult={this.state.confirmationResult} toggle={this.handleToggle}/>
           }
           </div>
       )
   }
}

export default Signup