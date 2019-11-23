import React from 'react'
import SignUp from '../../components/Signup/Signup.component'
import SignIn from '../../components/Signin/Signin.component'
import './Authentication.scss'
const Authentication = () => {
    return(
    <div className="col Authentication">
    <div className="row content">
      <div className="col-md-5 title">
             <h1 className="mainTitle"><b>Farm</b><b className="subTitle">ist</b></h1>
      </div>
      <div className="col-md-7 auth">
              <SignUp />
      </div>
      </div>
    </div>
    )
}

export default Authentication;