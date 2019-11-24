import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication'
// import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {
  return ( 
    <div className = "App">
    <Switch>
    <Route exact path="/" component={ Homepage } />
    <Route exact path="/authentication" component={ Authentication }/>
    </Switch>
    </div>
  );
}

export default App;