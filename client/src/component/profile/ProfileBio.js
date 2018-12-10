import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileBio extends Component {
    render() {

        const { profile } = this.props

        return (
            <div>
                <div>This is my fight song. Take back my life song</div>
                   {profile.bio}
            </div>
        
            
                
         
        );
    }
}
ProfileBio.propTypes = {
    profile: PropTypes.object.isRequired
  };

export default ProfileBio;