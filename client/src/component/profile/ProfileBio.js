import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProfileBio extends Component {
    render() {

        const { profile } = this.props

        return (
            <div>
                 { profile.bio }
            </div>
        
            
                
         
        );
    }
}
// ProfileBio.propTypes = {
//     profile: PropTypes.object
//   };

export default ProfileBio;