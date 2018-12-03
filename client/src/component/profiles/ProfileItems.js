import React, { Component } from 'react';
import PropTypes from 'prop=types';
import { Link } from 'react-router-dom';


class ProfileItems extends Component {
    render() {
        const { profile } = this.props;

        return (
            <div className="card car-body bg-light mb-4">
                <div className="row">
                  <div className="col-2"></div>
                    <img src={profile.user.avatar} alt="User Profile Picture" className="rounded-circle"/>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                <h3>{profile.user.name}</h3>
                <p>
                    {profile.status} 

                </p>
                <p>
                    <span>{profile.location}</span>
                </p>
                <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                View Profile
                </Link>
                <div>
                    <div className="col-md-4 d-none d-md-block">
                        <h4>Goals</h4>
                        <ul className="list-group">
                            {profile.goals.slice(0,6).map((goals, index) => (
                                <li key={index} className="list-group-item">
                                    <i className="fa fa-check pr-1"/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
         </div>
        );
    }
}
ProfileItems.propTypes = {
    profile: PropTypes.object.isrequired
}

export default ProfileItems;