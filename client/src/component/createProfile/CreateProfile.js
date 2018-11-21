import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import { withRouter ***REMOVED*** from 'react-router-dom';
import PropTypes from 'prop-types';
import FormListGroup from '../FormListGroup';
import InputFieldGroup from '../InputFields';
import TextFieldGroup from '../TextFieldGroup';
import {createProfile***REMOVED*** from '../../actions/profileActions';


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
            errors: {***REMOVED***,
        ***REMOVED***

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    ***REMOVED***
    

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors ***REMOVED***);
        ***REMOVED***
    ***REMOVED***

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            location: this.state.location,
            status: this.state.status,
            goals: this.state.goals,
            bio: this.state.bio
        ***REMOVED***
        this.props.createProfile(profileData, this.props.history)


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
                    options={options***REMOVED***
                    errors={errors.handle***REMOVED***
                    info="A unique handle for your profile. This can be a full name, nickname, or etc"
                    />
                       <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location***REMOVED***
                    onChange={this.onChange***REMOVED***
                    errors={errors.handle***REMOVED***
                    />
                    <FormListGroup
                    placeholder="* Status"
                    name="status"
                    value={this.state.status***REMOVED***
                    onChange={this.onChange***REMOVED***
                    errors={errors.status***REMOVED***
                    options={options***REMOVED***
                    />
                       <InputFieldGroup
                    placeholder="Bio"
                    name="bio"
                    value={this.state.bio***REMOVED***
                    onChange={this.onChange***REMOVED***
                    errors={errors.bio***REMOVED***
                    info="Tell Us About You and Your Fitness Goals!"
                    />
                    
                       <TextFieldGroup
                    placeholder="* Goals"
                    name="goals"
                    value={this.state.goals***REMOVED***
                    onChange={this.onChange***REMOVED***
                    errors={errors.goals***REMOVED***
                    info="Use comma separated values (ex: Be Leaner, Walk-up at 5am, Gym 5x A Week)"
                    />

                    <input type="submit" value="submit" className="btn btn-info btn-block mt-4" />

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
    //Listen for error state that was brought in from reducer
    errors: state.errors
***REMOVED***)

export default connect(mapStateToProps, { createProfile ***REMOVED***)(withRouter(CreateProfile));

