import React,{ Component } from 'react'
import './Signin.component.scss'

class Signin extends Component {
    render(){
        return(
            <div className="signIn">
            <input type="mobile" className="mobile col-10 col-md-3" name="mobile" placeholder="Enter mobile number"/>
            <br />
            <button className="signin">Sign In</button>
            <br />
            <br />
            <span className="alternate">Already a Farmist? <b className="toggleSignup">Sign In</b></span>
            </div>
        )
    }
}

export default Signin