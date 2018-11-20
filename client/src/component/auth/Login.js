import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import classnames form 'classnames';
import { LoginUser ***REMOVED*** from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {***REMOVED***
    ***REMOVED***;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  ***REMOVED***
  //If the user is authenticated redirect to dashboard
  componentWillReceiveProps(){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    ***REMOVED***
    //if the user is authenticated (isEmpty) then give errors 
    if(nextProps.errors)  {
      this.setState({errors: nextProps.errors***REMOVED***);
    ***REMOVED***
  ***REMOVED***

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    ***REMOVED***;

    console.log(user);
  ***REMOVED***

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value ***REMOVED***);
  ***REMOVED***

  render() {
    const { errors ***REMOVED*** = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your Achieve-FIT Account
              </p>
              <form onSubmit={this.onSubmit***REMOVED***>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    ***REMOVED***)***REMOVED***
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email***REMOVED***
                    onChange={this.onChange***REMOVED***/>
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email***REMOVED***</div>
                    )***REMOVED***
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    ***REMOVED***)***REMOVED***
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password***REMOVED***
                    onChange={this.onChange***REMOVED*** />  
                    {errors.password && (
                    <div className="invalid-feedback">{errors.password***REMOVED***</div>
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
Login.PropTypes = {
  loginUser: PropTypes.func.isRequired, 
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
***REMOVED***
const mapStateToProps = (state) => {(
  auth: state.auth;
  errors: state.errors
)***REMOVED***

export default connect(null, {loginUser***REMOVED***)(Login);
