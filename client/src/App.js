import React, { Component ***REMOVED*** from 'react';
import { BrowserRouter as Router, Route, Switch ***REMOVED*** from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={ Landing ***REMOVED***/>

        
      </div>
    );
  ***REMOVED***
***REMOVED***

export default App;
