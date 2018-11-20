import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import { withRouter ***REMOVED*** from 'react-router-dom';
import PropTypes from 'prop-types';
import FormListGroup from '../FormListGroup';
// import InputFieldGroup from '../InputFieldGroup';
import TextFieldGroup from '../TextFieldGroup';

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
            instagram: '',
            errors: {***REMOVED***
        ***REMOVED***
        this.onChange = this.onChange.bind(this);
        this.onChange = this.onSubmit.bind(this);
    ***REMOVED***

    onSubmit(e) {
        e.preventDefault();
    ***REMOVED***


    onChange(e){
        this.setState({ [e.target.name]: e.target.value***REMOVED***);
    ***REMOVED***

    render() {
        const { errors ***REMOVED*** = this.state;

        //Select options for status
        const options = [
            {label: "Fitness Status", value: 0***REMOVED***,
            {label: "Trainer", value: "Trainer"***REMOVED***,
            {label: "Fitness Model", value: "Fitness Model"***REMOVED***,
            {label: "Fitness Noob", value: "Fitness Noob"***REMOVED***,
            {label: "Body-Builder", value: "Body-Builder"***REMOVED***,
            {label: "Fitness Guru", value: "Fitness Guru"***REMOVED***,
            {label: "Other", value:"Other"***REMOVED***

        ]

        return (
            <div className="create-profile">
                <div className="container">
                 <div className="row">
                  <div className="col-md-7 m-auto">
                  <h1 className="display-4 text-center">Create Your Profile</h1>
                    <p className="lead text-center">
                    Input your information!</p>
                    <small className="d-block pb-3">* = required Field</small>
                    <form onSubmit={this.onSubmit***REMOVED***>
                    <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle***REMOVED***
                    onChange={this.onChange***REMOVED***
                    errors={errors.handle***REMOVED***
                    info="A unique handle for your profile. This can be a full name, nickname, or etc"
                    />
                    <FormListGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle***REMOVED***
                    onChange={this.onChange***REMOVED***
                    errors={errors.handle***REMOVED***
                    info="A unique handle for your profile. This can be a full name, nickname, or etc"
                    />
                    </form>
                   
                     
                  
                  
                  
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

export default connect(mapStateToProps, { CreateProfile ***REMOVED***)(withRouter(CreateProfile));

