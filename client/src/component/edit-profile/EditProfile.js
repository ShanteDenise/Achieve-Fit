import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormListGroup from '../FormListGroup';
import InputFieldGroup from '../InputFields';
import TextFieldGroup from '../TextFieldGroup';
import {createProfile, getCurrentProfile } from '../../actions/profileActions'
import isEmpty from '../../validation/is-empty'

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
            errors: {},
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        this.props.getCurrentProfile();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
        if (nextProps.profile.profile) {
            const profile = nextProps.profile.profile;

            //Skills array will change back to comma separated values
            const goalsArray = profile.goals.join(',')


            // If profile field does not exist make an empty string
            profile.handle = !isEmpty(profile.handle) ? profile.handle : ' ';
            profile.location = !isEmpty(profile.location) ? profile.location : ' ';
            profile.status = !isEmpty(profile.status) ? profile.status : ' ';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : ' ';



           
        
        this.setState({
            handle: profile.handle,
            location: profile.location,
            status: profile.status,
            goals: goalsArray,
            bio: profile.bio
        
            
        })
       
    }
}
  

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            location: this.state.location,
            status: this.state.status,
            goals: this.state.goals,
            bio: this.state.bio
        }
        this.props.createProfile(profileData, this.props.history)

    }
    
   
    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const { errors } = this.state;

        //Select options for status
        const options = [
            {label: "Fitness Status", value: 0},
            {label: "Trainer", value: "Trainer"},
            {label: "Fitness Model", value: "Fitness Model"},
            {label: "Fitness Noob", value: "Fitness Noob"},
            {label: "Body-Builder", value: "Body-Builder"},
            {label: "Fitness Guru", value: "Fitness Guru"},
            {label: "Other", value:"Other"}

        ]
      

        return (
            <div className="create-profile">
                <div className="container">
                 <div className="row">
                  <div className="col-md-7 m-auto">
                  <h1 className="display-4 text-center">Edit Your Profile</h1>
                    <small className="d-block pb-3">* = required Field</small>
                    <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    options={options}
                    errors={errors.handle}
                    info="A unique handle for your profile. This can be a full name, nickname, or etc"
                    />
                       <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    errors={errors.handle}
                    />
                    <FormListGroup
                    placeholder="* Status"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                    errors={errors.status}
                    options={options}
                    />
                       <InputFieldGroup
                    placeholder="Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    errors={errors.bio}
                    info="Tell Us About You and Your Fitness Goals!"
                    />
                    
                       <TextFieldGroup
                    placeholder="* Goals"
                    name="goals"
                    value={this.state.goals}
                    onChange={this.onChange}
                    errors={errors.goals}
                    info="Use comma separated values (ex: Be Leaner, Walk-up at 5am, Gym 5x A Week)"
                    />

                    <input type="submit" className="btn btn-info btn-block mt-4" />

                    </form>
                   
                  
                  </div>    
                 </div>
                </div>
            </div>
        );
    }
}
CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    profile: state.profile,
    //Listen for error state that was brought in from reducer
    errors: state.errors
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(CreateProfile));
