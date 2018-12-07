import React, { Component ***REMOVED*** from "react";
import PropTypes from "prop-types";
import { Link ***REMOVED*** from "react-router-dom";

class ProfileItems extends Component {
  render() {
    const { profile ***REMOVED*** = this.props;

    return (

      <div className="container mb-2" style={{height: '40%'***REMOVED******REMOVED***>
                    
          <div className="media">
          <img className="align-self-center mr-3 rounded-circle" src={profile.user.avatar***REMOVED*** style={{width: '200px', display: 'block'***REMOVED******REMOVED***></img>
          <div className="media-body">
          <h5 className="mb-3"><Link to={`/profile/${profile.handle***REMOVED***`***REMOVED***>{profile.user.handle***REMOVED***</Link></h5>
          {' '***REMOVED***
          <p className="mb-0">Location: {profile.location***REMOVED***</p>
          <ul className="list-group">
                {profile.goals.slice(0, 3).map((goals, index) => (
                  <li key={index***REMOVED*** className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {goals***REMOVED***
                  </li>
                ))***REMOVED***
              </ul>
              <Link to={`/profile/${profile.handle***REMOVED***`***REMOVED*** className="btn btn-info">
            View Profile
          </Link>
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
