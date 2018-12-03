import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profileActions'
import loader from '../../run_loader.gif';
import ProfileItems from './ProfileItems';

class Profiles extends Component {
    componentDidMount(){
        this.props.getProfiles();
    }

    render() {
        const { profiles, loading } = this.props.profile;
        let profileItems;
      //If there are no profiles display loading
        if(profiles === null || loading) {
            profileItems = <img src={loader} style={{width: '200px', margin:'auto', display: 'block'}} alt="loading"/>
        } else {
            if(profiles.length > 0) {
                profileItems = profiles.map(profile => (
                    <ProfileItems key={profile._id} profile={profile}/>
                ))
            } else {
                profileItems = <h4> No profiles found</h4>
            }
        }

        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="display-4 text-center"> Fitness Profiles</div>
                                <p className="lead text-center">
                                    Connect with Fitness Fanatics and Create Your Own Goals For A Healthier Lifestyle.  
                                </p>
                                {profileItems}
                        </div>
                    </div>
                </div>
            </div>
        )
           
    
    }
}
Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})


export default connect(mapStateToProps, { getProfiles})(Profiles);