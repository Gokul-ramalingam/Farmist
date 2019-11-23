import React,{ Component } from 'react'
import './Signin.style.scss'

class Signin extends Component {
    
    constructor(){
        super();
        this.state = {
            mobile : ''
        }
    }

    render(){
        const mobile = this.state.mobile;
        return(
            <div className="signIn">
            <input type="mobile" className="mobile col-10 col-md-3" name="mobile" value={mobile} placeholder="Enter mobile number"/>
            <br />
            <button className="signin">Sign In</button>
            <br />
            <br />
            <span className="alternate">New to Farmist? <b className="toggleSignup" onClick={this.props.toggle}>Register</b></span>
            </div>
        )
    }
}

export default Signin