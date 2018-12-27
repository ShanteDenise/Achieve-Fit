import React, { Component ***REMOVED*** from 'react';
import { BrowserRouter as Router, Route, Switch ***REMOVED*** from 'react-router-dom';
import jwt_decode from './utils/setAuthToken';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser ***REMOVED*** from './actions/authActions'
import { clearCurrentProfile ***REMOVED*** from './actions/profileActions'
import { Provider ***REMOVED*** from 'react-redux';
import store from './store';
import PrivateRoute from './component/PrivateRoute';

import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';

import Dashboard from './component/dashboard/Dashboard';
import CreateProfile from './component/createProfile/CreateProfile';
import EditProfile from './component/edit-profile/EditProfile';
import Profile from './component/profile/Profile';
import Profiles from './component/profiles/Profiles';

import { logoutUser ***REMOVED*** from './actions/authActions';
import './App.css';

//Check for token
if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  //Decode token get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

    //logout the current user
    store.dispatch(logoutUser());

    //Clear current profile
    store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href = '/login';

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
            <Switch>
              <PrivateRoute exact path="/dashboard" component={ Dashboard ***REMOVED*** />
             </Switch>
            <Switch>
              <PrivateRoute exact path="/create-profile" component={ CreateProfile***REMOVED*** />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={ EditProfile***REMOVED*** />
            </Switch>
            <Switch>
              <Route exact path="/profile/:handle" component={Profile***REMOVED***/>
              </Switch>
              <Switch>
              <Route exact path="/profiles" component={Profiles***REMOVED*** />
              </Switch>
              <Switch>
              <Route exact path="/profiles/user/:user_id" component={Profile***REMOVED*** />
              </Switch>



            </div>
      </div>
    
      </Switch>
      </Router>
      </Provider>
     
    );
  ***REMOVED***
***REMOVED***

export default App;
