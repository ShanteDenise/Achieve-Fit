import React, { Component ***REMOVED*** from 'react';
import { Link ***REMOVED*** from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import { getCurrentProfile, deleteAccount ***REMOVED*** from '../../actions/profileActions';
import ProfileEdit from './ProfileEdit';
import loader from '../../load.gif';

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
   //When the dashboard is loading the dashboard content will be set to loading gif
    if (profile === null || loading) {
      dashboardContent = <img src={loader***REMOVED*** style={{width: '200px', margin:'auto', display: 'block'***REMOVED******REMOVED*** alt="loading"/>
    ***REMOVED***
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = ( <div>
                    
          <div className="media">
          <img className="align-self-center mr-3" src={user.avatar***REMOVED*** style={{width: '200px', display: 'block'***REMOVED******REMOVED***></img>
          <div className="media-body">
          <h5 className="mt-0">Welcome <Link to={`/profile/${profile.handle***REMOVED***`***REMOVED***>{user.name***REMOVED***</Link></h5>
          <p className="lead text-muted bio-text">{profile.bio***REMOVED*** <Link to={`/profile/${profile.bio***REMOVED***`***REMOVED***></Link></p>
          {' '***REMOVED***
          <p className="mb-0">Location:{profile.location***REMOVED***</p>
          <div className="mb=10"></div>
          <ul className="list-group">
                {profile.goals.slice(0, 6).map((goals, index) => (
                  <li key={index***REMOVED*** className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {goals***REMOVED***
                  </li>
                ))***REMOVED***
              </ul>
          </div>
          <div> <button onClick={this.handleCreateNewIdea***REMOVED***>New Idea</button>
          </div>
          </div>
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

    //render the dashboard content below
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

//Bring in proptypes
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
***REMOVED***;

//bring in profile and authentication
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
***REMOVED***);

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount ***REMOVED***)(Dashboard);
