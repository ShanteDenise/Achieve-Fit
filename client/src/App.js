import React, { Component ***REMOVED*** from 'react';
import { BrowserRouter as Router, Route, Switch ***REMOVED*** from 'react-router-dom';
import { Provider ***REMOVED*** from 'react-redux'
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';


import './App.css';

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
