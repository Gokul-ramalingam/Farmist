import React,{ Component } from 'react'
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
            <button className="signin">Sign In</button>
            <br />
            <br />
            <span className="alternate">New to Farmist? <b className="toggleSignup" onClick={this.props.toggle}>Register</b></span>
            </div>
        )
    }
}

export default Signin