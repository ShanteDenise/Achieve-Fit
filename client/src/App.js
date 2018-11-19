import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
      <Navbar/>
      <Route exact path="/" component={ Landing }/>
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
