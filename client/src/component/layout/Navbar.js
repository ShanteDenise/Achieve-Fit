import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

    render() {
      const  { isAuthenticated, user } = this.props.auth;
      console.log("User",user)

      const authen  = (
        <ul className="navbar-nav ml-auto">
        <li> 
                <Link className="nav-item mr-4" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item">
                 <a href = "" onClick={this.onLogout.bind(this)}>Logout</a>
                                 
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
                data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
              </button>
    
              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profiles">
                      {' '}
                      Fitness Profiles
                    </Link>
                  </li>
                </ul>
    
                {isAuthenticated ? authen: unAuthLinks}

              </div>
            </div>
          </nav>
        );
      }   
    
    }
    Navbar.PropTypes = {
      logoutUser: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired
    }
    const mapStateToProps = state => ({
      auth: state.auth,
    })
    
  
    

export default connect(mapStateToProps, {logoutUser})(Navbar);