import React,{ Component } from 'react'
import SignIn from '../../components/Signin/Signin.component'
import './Authentication.scss'
class Authentication extends Component 
{
  render()
  {
    return(
    <div className="col Authentication">
    <div className="row content">
      <div className="col-md-12 title">
      <h1 className = "mainTitle"><b>Farm</b><b className="subTitle">ist</b></h1> 
      <SignIn/>
      </div>
      </div>
    </div>
    )
  }
}

export default Authentication;