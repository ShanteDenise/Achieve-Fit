import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileFitBit from './/ProfileFitBit'
import ProfileBio from './ProfileBio'
import ProfileGoals from './ProfileGoals'


class Profile extends Component {
    render() {
        return (
            <div>
                <ProfileHeader/>
                <ProfileBio/>
                <ProfileGoals/>
                <ProfileFitBit/>
            </div>
        );
    }
}

export default Profile;