import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';
import { Link ***REMOVED*** from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import { getProfileByHandle ***REMOVED*** from '../../actions/profileActions';
import loader from '../../blue_loader.jpg';
import ProfileBio from './ProfileBio';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    ***REMOVED***
  ***REMOVED***

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    ***REMOVED***
  ***REMOVED***

  render() {
    const { profile, loading ***REMOVED*** = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <img src={loader***REMOVED*** style={{width: '150px', margin:'auto', display: 'block'***REMOVED******REMOVED*** alt="loading"/>
    ***REMOVED***
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile***REMOVED*** />
     
           <ProfileBio profile= {profile***REMOVED***/>
      
        </div>
       
      );
    ***REMOVED***

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent***REMOVED***</div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  profile: state.profile
***REMOVED***);

export default connect(mapStateToProps, { getProfileByHandle ***REMOVED***)(Profile);
