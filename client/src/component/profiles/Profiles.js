import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles ***REMOVED*** from '../../actions/profileActions'
import loader from '../../load.gif';
import ProfileItems from './ProfileItems';


class Profiles extends Component {
    componentDidMount(){
        this.props.getProfiles();
    ***REMOVED***
  
    render() {
        const { profiles, loading ***REMOVED*** = this.props.profile;
        let profileItem;
      //If there are no profiles display loading
        if(profiles === null || loading) {
            profileItem = <img src={loader***REMOVED*** style={{width: '150px', margin:'auto', display: 'block'***REMOVED******REMOVED*** alt="loading"/>
        ***REMOVED***
            if(profiles.length > 0) {
                profileItem = profiles.map(profile => (
                    <ProfileItems key={profile._id***REMOVED*** profile={profile***REMOVED***/> 
                ))
            ***REMOVED***
                profileItem = <h4> No profiles found</h4>
            ***REMOVED***
        ***REMOVED***

        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="display-4 text-center"> Fitness Profiles</div>
                                <p className="lead text-center">
                                    Connect with Fitness Fanatics and Create Your Own Goals For A Healthier Lifestyle.  
                                </p>
                                {profileItem***REMOVED***
                        </div>
                    </div>
                </div>
            </div>
        )
           
    
    ***REMOVED***
***REMOVED***
Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
***REMOVED***

const mapStateToProps = state => ({
    profile: state.profile,
***REMOVED***)


export default connect(mapStateToProps, { getProfiles***REMOVED***)(Profiles);