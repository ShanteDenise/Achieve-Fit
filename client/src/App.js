import React, { Component ***REMOVED*** from 'react';
import { BrowserRouter as Router, Route, Switch ***REMOVED*** from 'react-router-dom';
import jwt_decode from './utils/setAuthToken';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser ***REMOVED*** from './actions/authActions'
import { Provider ***REMOVED*** from 'react-redux';
import store from './store';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';


import './App.css';

//Check for token
if(localStorage.jwtToken){
  setAuthToken(localStorage.jetToken);
  //Decode token get user info and exp
  const decoded = jwt_decode(localStorage.jetToken)
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
***REMOVED***

class App extends Component {
  render() {
    return (
      <Provider store ={ store ***REMOVED*** >
      <Router>
      <Switch>
      <div className="App">
         <Navbar />
            <Route exact path="/" component={ Landing ***REMOVED***/>
             <div className="container">
             <Route exact path="/register" component={ Register ***REMOVED*** />
             <Route exact path="/login" component={ Login ***REMOVED*** />

            </div>
      </div>
    
      </Switch>
      </Router>
      </Provider>
     
    );
  ***REMOVED***
***REMOVED***

export default App;
