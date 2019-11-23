import React,{ Component } from 'react'
import SignUp from '../../components/Signup/Signup.component'
import SignIn from '../../components/Signin/Signin.component'
import './Authentication.scss'
class Authentication extends Component 
{
  constructor(){
    super();
    this.state = {
      toggle : true
    }
  }

  handleClick = () =>{
    this.setState({
      toggle : !this.state.toggle
    })
  }

  render()
  {
    return(
    <div className="col Authentication">
    <div className="row content">
      <div className="col-md-12 title">
      <h1 className = "mainTitle"><b>Farm</b><b className="subTitle">ist</b></h1> 
       {
         this.state.toggle?
         <SignUp toggle={this.handleClick}/> : <SignIn toggle={this.handleClick}/>
       }
      </div>
      </div>
    </div>
    )
  }
}

export default Authentication;