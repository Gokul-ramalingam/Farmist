import React,{ Component } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom'
import {connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'
import { auth } from './components/Firebase/Firebase.util'
import Authentication from './pages/Authentication/Authentication'
// import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

class App extends Component{

  unsubscribe = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;
    
    this.unsubscribe = auth.onAuthStateChanged(async user =>{

      if(user)
        console.log(user)
      setCurrentUser(user)
    })

  }

  componentWillUnmount(){
    this.unsubscribe();
  }


  render(){
  return ( 
    <div className = "App">
    <Switch>
    <Route exact path="/" component={ Homepage } />
    <Route exact path="/authentication" component={ Authentication }/>
    </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)