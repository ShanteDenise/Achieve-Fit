import React, { Component ***REMOVED*** from 'react';
import { Link ***REMOVED*** from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Developer
                    </h1>
                    <p className="lead"> Create a Fitness profile/portfolio, share posts and get help from other Fitness Freaks</p>
                    <hr />
                    <Link className="btn btn-lg btn-info mr-2" to="/register">Sign Up</Link>
                    <Link className="btn btn-lg btn-light" to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        );
    ***REMOVED***
***REMOVED***

export default Landing;