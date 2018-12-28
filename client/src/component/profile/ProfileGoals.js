import React, { Component ***REMOVED*** from "react";
import PropTypes from "prop-types";

class ProfileGoals extends Component {
  render() {
    const { profile ***REMOVED*** = this.props;

    const goals = profile.goals.map((goal, index) => (
      <div key={index***REMOVED*** className="p-3">
        <i className="fa fa-check" /> {goal***REMOVED***
      </div>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-2">
            <h4 className="text-center text-info">Goals</h4>
    
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {goals***REMOVED***
                </div>
              </div>
            </div>
          </div>
        </div>
    
    );
  ***REMOVED***
***REMOVED***
ProfileGoals.PropTypes = {
  profile: PropTypes.object.isRequired
***REMOVED***;

export default ProfileGoals;
