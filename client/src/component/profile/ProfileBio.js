import React, { Component ***REMOVED*** from "react";
// import PropTypes from 'prop-types';

class ProfileBio extends Component {
  render() {
    const { profile ***REMOVED*** = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark mb-3" >
            <h4 className="text-center text-info">{profile.handle***REMOVED***'s Bio</h4>
            <h6 className="text-center text-white">{profile.bio***REMOVED***</h6>
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***
// ProfileBio.propTypes = {
//     profile: PropTypes.object
//   ***REMOVED***;

export default ProfileBio;
