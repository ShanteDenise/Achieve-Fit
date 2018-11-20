import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from './utils/setAuthToken';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions'
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Dashboard from './component/dashboard/Dashboard';
import CreateProfile from './component/createProfile/CreateProfile'


import './App.css';

//Check for token
if(localStorage.jwtToken){
  setAuthToken(localStorage.jetToken);
  //Decode token get user info and exp
  const decoded = jwt_decode(localStorage.jetToken)
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
  render() {
    return (
      <Provider store ={ store } >
      <Router>
      <Switch>
      <div className="App">
         <Navbar />
            <Route exact path="/" component={ Landing }/>
             <div className="container">
             <Route exact path="/register" component={ Register } />
             <Route exact path="/login" component={ Login } />
             <Route exact path="/dashboard" component={ Dashboard } />
             <Route exact path="/create-profile" component={ CreateProfile} />

            </div>
      </div>
    
      </Switch>
      </Router>
      </Provider>
     
    );
  }
}

export default App;
