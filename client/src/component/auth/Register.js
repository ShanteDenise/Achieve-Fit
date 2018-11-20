import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { withRouter ***REMOVED*** from 'react-router-dom'
import classnames from 'classnames';
import { connect ***REMOVED*** from 'net';
import { registerUser ***REMOVED*** from '../../actions/authActions'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {***REMOVED***
    ***REMOVED***;

   
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  ***REMOVED***
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({ errors: nextProps.errors***REMOVED***)
    ***REMOVED***
  ***REMOVED***

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value ***REMOVED***);
  ***REMOVED***

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    ***REMOVED***;
    //redirect to login page
    this.props.registerUser(newUser, this.props.history)


  ***REMOVED***

  render() {
    const { errors ***REMOVED*** = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your Fitness Profile
              </p>
              <form noValidate onSubmit={this.onSubmit***REMOVED***>
                <div className="form-group">
                  <input
                    type="text"
                    //classname is used to display the red errors that you receive if you do not 
                    //meet all validation requirements
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    ***REMOVED***)***REMOVED***
                    placeholder="Name"
                    name="name"
                    value={this.state.name***REMOVED***
                    onChange={this.onChange***REMOVED***
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name***REMOVED***</div>
                  )***REMOVED***
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    ***REMOVED***)***REMOVED***
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email***REMOVED***
                    onChange={this.onChange***REMOVED***
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email***REMOVED***</div>
                  )***REMOVED***
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    create a Gravatar email.
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    ***REMOVED***)***REMOVED***
                    placeholder="Password"
                    name="password"
                    value={this.state.password***REMOVED***
                    onChange={this.onChange***REMOVED***
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password***REMOVED***</div>
                  )***REMOVED***
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    ***REMOVED***)***REMOVED***
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2***REMOVED***
                    onChange={this.onChange***REMOVED***
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2***REMOVED***</div>
                  )***REMOVED***
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isrequired
 
***REMOVED***;

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
***REMOVED***)

export default connect(mapStateToProps, {registerUser***REMOVED***)(withRouter(Register));
