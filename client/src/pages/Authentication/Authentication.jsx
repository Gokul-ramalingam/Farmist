import React from 'react'
import SignUp from '../../components/Signup/Signup.component'
import SignIn from '../../components/Signin/Signin.component'
import './Authentication.scss'
const Authentication = () => {
    return(
    <div className="col Authentication">
    <div className="row content">
      <div className="col-md-12 title">
                <SignUp />
      </div>
      </div>
    </div>
    )
}

export default Authentication;