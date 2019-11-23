import React from 'react'
import SignUp from '../../components/Signup/Signup.component'
import SignIn from '../../components/Signin/Signin.component'
import Title from '../../components/Title/Title.component'
import './Authentication.scss'
const Authentication = () => {
    return(
    <div className="col Authentication">
    <div className="row content">
      <div className="col-md-6 title">
           Hello World!
      </div>
      <div className="col-md-6 auth">
          Hello World!
      </div>
      </div>
    </div>
    )
}

export default Authentication;