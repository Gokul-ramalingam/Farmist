import React from 'react'
import SignUp from '../../components/Signup/Signup.component'
import SignIn from '../../components/Signin/Signin.component'
import Title from '../../components/Title/Title.component'
import './Authentication.scss'
const Authentication = () => {
    return(
    <div className="Authentication">
       <div className="col-sm-12 col-md-5 title">
        <Title />
      </div>
    </div>
    )
}

export default Authentication;