import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';

class ProfileHeader extends Component {
  render() {

    const profile = { profile ***REMOVED***
  
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar***REMOVED***
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center"></h1>
              <p className="lead text-center">
                {profile.status***REMOVED***{' '***REMOVED***
    
              </p>
              {(profile.location) ? null : <p>{profile.location***REMOVED***</p>***REMOVED***
              <p>
                  <a
                    className="text-white p-2"
                    href={profile.website***REMOVED***
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
               

                  <a
                    className="text-white p-2"
                    href='https://www.linkedin.com/feed/'
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
               

                  <a
                    className="text-white p-2"
                    href='https://www.linkedin.com/feed/'
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
               

                  <a
                    className="text-white p-2"
                    href='https://www.linkedin.com/feed/'
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                

                  <a
                    className="text-white p-2"
                    href='https://www.linkedin.com/feed/'
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
              

                  <a
                    className="text-white p-2"
                    href='https://www.linkedin.com/feed/'
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

ProfileHeader.PropTypes = {
  profile: PropTypes.object.isRequired
***REMOVED***


export default ProfileHeader;


