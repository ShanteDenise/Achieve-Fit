import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';


import './App.css';


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

            </div>
      </div>
    
      </Switch>
      </Router>
      </Provider>
     
    );
  }
}

export default App;
