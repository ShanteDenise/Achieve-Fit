import React, { Component ***REMOVED*** from 'react';
import { Link ***REMOVED*** from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import { getCurrentProfile, deleteAccount ***REMOVED*** from '../../actions/profileActions';
import ProfileEdit from './ProfileEdit';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  ***REMOVED***

  onDeleteClick(e){
    this.props.deleteAccount();
  ***REMOVED***

  render() {
    const { user ***REMOVED*** = this.props.auth;
    const { profile, loading ***REMOVED*** = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <h4>Loading</h4>;
    ***REMOVED***
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (<div>
          <p className="lead text-muted">Welcome <Link to={`/profile/${profile.handle***REMOVED***`***REMOVED***>{user.name***REMOVED***</Link></p>
          <ProfileEdit/>
          <div style={{ marginBottom: '50px'***REMOVED******REMOVED***/>
          <button onClick={this.onDeleteClick.bind(this)***REMOVED*** className="btn btn-danger">Delete My Profile</button>
        </div>
        )
      ***REMOVED***
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome </p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      ***REMOVED***
    ***REMOVED***

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent***REMOVED***
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
***REMOVED***);

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount ***REMOVED***)(Dashboard);
