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
    <Route exact path="/authentication" render={()=> this.props.currentUser?(<Redirect to='/' />):(<Authentication />)}/>
    </Switch>
    </div>
  );
  }
}

// mapStateToProps => it provides props by calling selector which indeed 
// implements memoization functionality so that processing cost get reduced

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


//mapDispatchToProps => it dispatches an action

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)