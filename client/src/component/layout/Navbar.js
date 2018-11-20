import React, { Component ***REMOVED*** from 'react';
import { Link ***REMOVED*** from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux'
import { logoutUser ***REMOVED*** from '../../actions/authActions'

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  ***REMOVED***
    render() {
      const  { isAuthenticated, user ***REMOVED*** = this.props.auth;

      const auth  = (
        <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                   <a href = "" onClick={this.onLogout.bind(this)***REMOVED*** 
                   className="nav-item">
                   <img src={user.avatar***REMOVED*** alt={user.name***REMOVED*** style={{width: '25px', marginRight: '5px'***REMOVED******REMOVED***/>
                   </a>
                  
                  </li>
                </ul>
      )
      const unAuthLinks  = (
        <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
      )

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Achieve-Fit
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon" />
              </button>
    
              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profiles">
                      {' '***REMOVED***
                      Fitness Profiles
                    </Link>
                  </li>
                </ul>
    
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
                {isAuthenticated ? auth : unAuthLinks***REMOVED***
              </div>
            </div>
          </nav>
        );
      ***REMOVED***   
    
    ***REMOVED***
    Navbar.PropTypes = {
      logoutUser: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired
    ***REMOVED***
    const mapStateToProps = state => ({
      auth: state.auth,
    ***REMOVED***)
    
  
    

export default connect(mapStateToProps, {logoutUser***REMOVED***)(Navbar);