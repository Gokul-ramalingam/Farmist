import React,{ Component } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'
import { auth } from './firebase/firebase.util'
import Authentication from './pages/Authentication/Authentication'
// import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage.component'
import Welcome from './pages/Welcome/Welcome.component'
import Estimation from './pages/Estimation/Estimation.component'
import Prediction from './pages/Prediction/Prediction.component'
import Availability from './pages/Availability/Availability.component'
import StockDetails from './pages/StockDetails/StockDetails.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

class App extends Component {

  unsubscribe = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribe = auth.onAuthStateChanged(async user => {

      if (user)
        console.log(user)
      setCurrentUser(user)
    })

  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    return ( 
      <div className = "App" >
      <Switch >
      <Route exact path = "/" render = { () => this.props.currentUser ? ( < Homepage / > ) : ( < Redirect to = "/welcome" /> ) }/> 
      <Route exact path = "/welcome" component= { Welcome }/>
      <Route exact path = "/authentication" render = { () => this.props.currentUser ? ( < Redirect to = '/' / > ) : ( < Authentication / > ) }/> 
      <Route exact path = "/estimate" component = { Estimation }/> 
      <Route exact path = "/predict" component = { Prediction } />
      <Route exact path = "/check" component = { Availability } /> 
      <Route exact path = "/view" component = { StockDetails }/>
       </Switch> 
       </div>
    );
  }
}

// mapStateToProps => it provides props by calling selector which indeed 
// implements memoization functionality so that processing cost get reduced

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


//mapDispatchToProps => it dispatches an action

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)