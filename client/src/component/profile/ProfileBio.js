import React, { Component } from "react";
// import PropTypes from 'prop-types';

class ProfileBio extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark mb-3" >
            <h4 className="text-center text-info">{profile.handle}'s Bio</h4>
            <h6 className="text-center text-white">{profile.bio}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// ProfileBio.propTypes = {
//     profile: PropTypes.object
//   };

export default ProfileBio;
