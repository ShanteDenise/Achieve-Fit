import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileGoals extends Component {
  render() {
    const { profile } = this.props;

    const goals = profile.goals.map((goal, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {goal}
      </div>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-2">
            <h4 className="text-center text-info">Goals</h4>
    
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {goals}
                </div>
              </div>
            </div>
          </div>
        </div>
    
    );
  }
}
ProfileGoals.PropTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileGoals;
