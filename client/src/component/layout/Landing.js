import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

  componentDidMount() {
    //check to see if the user is logged in. Push to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

    render() {
        return (
            <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Achieve-FIT
                    </h1>
                    <p className="lead"> Create a Fitness Profile, Keep track of your fitness GOALS, share posts and get help from other Fitness Freaks</p>
                    <hr />
                    <Link className="btn btn-lg btn-info mr-2" to="/register">Sign Up</Link>
                    <Link className="btn btn-lg btn-light" to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        );
    }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing);