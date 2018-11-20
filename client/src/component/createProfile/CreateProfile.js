import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onChange = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
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
                  <h1 className="display-4 text-center">Create Your Profile</h1>
                    <p className="lead text-center">
                    Input your information!</p>
                    <small className="d-block pb-3">* = required Field</small>
                    <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    errors={errors.handle}
                    info="A unique handle for your profile. This can be a full name, nickname, or etc"
                    />
                    <FormListGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    errors={errors.handle}
                    info="A unique handle for your profile. This can be a full name, nickname, or etc"
                    />
                    </form>
                   
                     
                  
                  
                  
                  </div>    
                 </div>
                </div>
            </div>
        );
    }
}
CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, { CreateProfile })(withRouter(CreateProfile));

