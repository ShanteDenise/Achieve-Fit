import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';
import { Link ***REMOVED*** from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileFitBit from './/ProfileFitBit'
import ProfileBio from './ProfileBio'
import ProfileGoals from './ProfileGoals'
import { getProfileByHandle ***REMOVED*** from '../../actions/profileActions'

class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle)
        ***REMOVED***
    ***REMOVED***
    render() {
        return (
            <div>
                <ProfileHeader/>
                <ProfileBio/>
                <ProfileGoals/>
                <ProfileFitBit/>
            </div>
        );
    ***REMOVED***
***REMOVED***
Profile.PropTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
***REMOVED***

const mapStateToProps = state => ({
    profile: state.profile
***REMOVED***)

export default connect(mapStateToProps, { getProfileByHandle***REMOVED***)(Profile);