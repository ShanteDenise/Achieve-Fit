import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileFitBit from './/ProfileFitBit'
import ProfileBio from './ProfileBio'
import ProfileGoals from './ProfileGoals'
import { getProfileByHandle } from '../../actions/profileActions'

class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle)
        }
    }
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
Profile.PropTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfileByHandle})(Profile);