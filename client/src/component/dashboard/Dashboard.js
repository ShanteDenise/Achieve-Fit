import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import ProfileEdit from "./ProfileEdit";
import loader from "../../load.gif";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    //When the dashboard is loading the dashboard content will be set to loading gif
    if (profile === null || loading) {
      dashboardContent = (
        <img
          src={loader}
          style={{ width: "200px", margin: "auto", display: "block" }}
          alt="loading"
        />
      );
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <div className="media">
              <img
                className="align-self-center mr-3"
                src={user.avatar}
                style={{ width: "200px", display: "block" }}
              />
              <div className="media-body">
                <h5 className="mt-2 mb-3">
                  Welcome{" "}
                  <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
                </h5>
                <h5>My Bio: </h5>
                <p className="lead text-muted bio-text">
                  {profile.bio} />
                </p>{" "}
                <h5>My Goals:</h5>
                <ul className="list-group">
                  {profile.goals.map((goals, index) => (
                    <li key={index} className="list-group-item">
                      <i className="fa fa-check pr-1" />
                      {goals}
                    </li>

                  ))}
                </ul>
                <h5 className="mt-3">My Status: </h5>
                <p className="lead bio-text mt-2">
                  {profile.status} 
                </p>
              </div>
            </div>
            <ProfileEdit />
            <div style={{ marginBottom: "50px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Profile
            </button>
          </div>
        );
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
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="display-4 text-center text-danger">
                    Dashboard
                  </h3>
                  {dashboardContent}
                </div>
              </div>
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

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
