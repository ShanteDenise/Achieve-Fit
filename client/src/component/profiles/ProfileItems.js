import React, { Component ***REMOVED*** from "react";
import PropTypes from "prop-types";
import { Link ***REMOVED*** from "react-router-dom";

class ProfileItems extends Component {
  render() {
    const { profile ***REMOVED*** = this.props;

    return (
      <div className="card car-body bg-light mb-4">
        <div className="row">
          <div className="col-2" />
          <img src={profile.users.avatar***REMOVED*** alt="User Profile Picture" className="rounded-circle"/>
        </div>
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{profile.users.name***REMOVED***</h3>
          <p>{profile.status***REMOVED***</p>
          <p>
            <span>{profile.location***REMOVED***</span>
          </p>
          <Link to={`/profile/${profile.handle***REMOVED***`***REMOVED*** className="btn btn-info">
            View Profile
          </Link>
          <div>
            <div className="col-md-4 d-none d-md-block">
              <h4>Goals</h4>
              <ul className="list-group">
                {profile.goals.slice(0, 6).map((goals, index) => (
                  <li key={index***REMOVED*** className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {goals***REMOVED***
                  </li>
                ))***REMOVED***
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***
ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired
***REMOVED***;

export default ProfileItems;
