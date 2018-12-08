import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import ProfileEdit from './ProfileEdit';
import loader from '../../blue_loader.jpg';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e){
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
   //When the dashboard is loading the dashboard content will be set to loading gif
    if (profile === null || loading) {
      dashboardContent = <img src={loader} style={{width: '200px', margin:'auto', display: 'block'}} alt="loading"/>
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = ( <div>
                    
          <div className="media">
          <img className="align-self-center mr-3" src={user.avatar} style={{width: '200px', display: 'block'}}></img>
          <div className="media-body">
          <h5 className="mt-0">Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></h5>
          <p className="lead text-muted bio-text">{profile.bio} <Link to={`/profile/${profile.bio}`}></Link></p>
          {' '}
          <p className="mb-0">Location:{profile.location}</p>
          <div className="mb=10"></div>
          <ul className="list-group">
                {profile.goals.slice(0, 6).map((goals, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {goals}
                  </li>
                ))}
              </ul>
          </div>
          </div>
          
          <ProfileEdit/>
          <div style={{ marginBottom: '50px'}}/>
          <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Profile</button>
        </div>
        )

      } else {
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
      }
    }

    //render the dashboard content below
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Bring in proptypes
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

//bring in profile and authentication
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
