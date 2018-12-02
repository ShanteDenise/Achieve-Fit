import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles ***REMOVED*** from '../../actions/profileActions'
import loader from '../../run_loader.gif';



class Profiles extends Component {
    render() {
        const {profiles, loading ***REMOVED*** = this.props.profile;
        let profileItems;

        if(profiles === null || loading) {
            profileItems = <img src={loader***REMOVED*** style={{width: '200px', margin:'auto', display: 'block'***REMOVED******REMOVED*** alt="loading"/>
        ***REMOVED***
            if(profiles.length > 0) {
              
            ***REMOVED***
                profileItems = <h4> No profiles found</h4>
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
                                {profileItems***REMOVED***
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
    profile: state.profile
***REMOVED***)


export default connect(mapStateToProps, { getProfiles***REMOVED***)(Profiles);