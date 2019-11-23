import React,{ Component } from 'react'
import './Signup.style.scss'

class Signup extends Component{
   render(){
       return(
           <div className="signUp">
             <input type="text" className="name col-10 col-md-3" name="name" placeholder="Enter name"/>
             <br />
             <input type="password" className="city col-10 col-md-3" name="city" placeholder="Enter city"/>
             <br />
             <input type="mobile" className="mobile col-10 col-md-3" name="mobile" placeholder="Enter mobile number"/>
           </div>
       )
   }
}

export default Signup