import React,{ Component } from 'react'
import './Signup.style.scss'

class Signup extends Component{

  constructor(){
    super()
    this.state = {
      name : '',
      city : '',
      mobile : ''
    }
  }

   render(){
     const { name,city,mobile } = this.state;
       return(
           <div className="signUp">
             <input type="text" className="name col-10 col-md-3" name="name" value={name} placeholder="Enter name"/>
             <br />
             <input type="text" className="city col-10 col-md-3" name="city" value={city} placeholder="Enter city"/>
             <br />
             <input type="mobile" className="mobile col-10 col-md-3" name="mobile" value={mobile} placeholder="Enter mobile number"/>
             <br />
             <button className="register">Register</button>
             <br />
             <br />
             <span className="alternate">Already a Farmist? <b className="toggleSignin" onClick={this.props.toggle}>Sign In</b></span>
           </div>
       )
   }
}

export default Signup