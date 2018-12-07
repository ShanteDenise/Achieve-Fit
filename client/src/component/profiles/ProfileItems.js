import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileItems extends Component {
  render() {
    const { profile } = this.props;

    return (

      <div className="container">
                    
          <div className="media">
          <img className="align-self-center mr-3" src={profile.user.avatar} style={{width: '200px', display: 'block'}}></img>
          <div className="media-body">
          <h5 className="mt-0"><Link to={`/profile/${profile.handle}`}>{profile.user.name}</Link></h5>
          {' '}
          <p className="mb-0">Location: {profile.location}</p>
          <Link to={`/profile/${profile.handle}`} className="btn btn-info">
            View Profile
          </Link>
          <ul className="list-group">
                {profile.goals.slice(0, 3).map((goals, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {goals}
                  </li>
                ))}
              </ul>
          </div>
          </div>
          
         
         
      
         
          
        </div>
    
    );
  }
}

ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItems;
