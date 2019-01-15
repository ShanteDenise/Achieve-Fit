import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import TextFieldGroup from '../TextFieldGroup';
import { addComment ***REMOVED*** from '../../actions/postActions';

class CommentForm extends Component {
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
    const { postId ***REMOVED*** = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    ***REMOVED***;

    this.props.addComment(postId, newComment);
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
          <div className="card-header bg-info text-white">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit***REMOVED***>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Reply to post"
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

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
***REMOVED***);

export default connect(mapStateToProps, { addComment ***REMOVED***)(CommentForm);
