import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import TextFieldGroup from '../TextFieldGroup';
import { addPost ***REMOVED*** from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {***REMOVED***
    ***REMOVED***;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  ***REMOVED***

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors ***REMOVED***);
    ***REMOVED***
  ***REMOVED***

  onSubmit(e) {
    e.preventDefault();

    const { user ***REMOVED*** = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    ***REMOVED***;

    this.props.addPost(newPost);
    this.setState({ text: '' ***REMOVED***);
  ***REMOVED***

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value ***REMOVED***);
  ***REMOVED***

  render() {
    const { errors ***REMOVED*** = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit***REMOVED***>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Create a post"
                  name="text"
                  value={this.state.text***REMOVED***
                  onChange={this.onChange***REMOVED***
                  error={errors.text***REMOVED***
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
***REMOVED***);

export default connect(mapStateToProps, { addPost ***REMOVED***)(PostForm);
