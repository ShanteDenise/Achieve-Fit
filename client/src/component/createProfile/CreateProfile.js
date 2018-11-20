import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../TextFieldGroup'

class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            handle: '',
            bio: '',
            location: '',
            status: '',
            goals: '',
            fitbitusername: '',
            instagram: ' ',
            errors: {***REMOVED***
        ***REMOVED***
    ***REMOVED***
    render() {
        return (
            <div className="create-profile">
                <div className="container">
                 <div className="row">
                  <div className="col-md-7 m-auto">
                  <h1 className="display-4 text-center">Create Your Profile</h1>
                    <p className="lead text-center">
                    Input your information!</p>
                    <small className="d-block pb-3">* = required Field</small>
                  
                  
                  
                  
                  </div>    
                 </div>
                </div>
            </div>
        );
    ***REMOVED***
***REMOVED***
CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
***REMOVED***


const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
***REMOVED***)

export default CreateProfile;