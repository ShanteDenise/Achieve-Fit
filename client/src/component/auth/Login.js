import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import { loginUser ***REMOVED*** from '../../actions/authActions';
import TextFieldGroup from '../TextFieldGroup';

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

  componentDidMount() {
    //check to see if the user is logged in. Push to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    ***REMOVED***
  ***REMOVED***

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    ***REMOVED***

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors ***REMOVED***);
    ***REMOVED***
  ***REMOVED***

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    ***REMOVED***;

    this.props.loginUser(userData);
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
                Sign in to your Achieve-FIT account
              </p>

              <form onSubmit={this.onSubmit***REMOVED***>
                  <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email***REMOVED***
                  onChange={this.onChange***REMOVED***
                  error={errors.email***REMOVED***
                  />

                   <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password***REMOVED***
                  onChange={this.onChange***REMOVED***
                  error={errors.password***REMOVED***
                  />
       
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
          </div>
        </div>
      </div>
     </div>
            
           
     
     

    );
  ***REMOVED***
***REMOVED***

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
***REMOVED***);

export default connect(mapStateToProps, { loginUser ***REMOVED***)(Login);
