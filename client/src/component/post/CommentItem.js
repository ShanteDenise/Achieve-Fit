import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment ***REMOVED*** from '../../actions/postActions';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  ***REMOVED***

  render() {
    const { comment, postId, auth ***REMOVED*** = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar***REMOVED***
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{comment.name***REMOVED***</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{comment.text***REMOVED***</p>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)***REMOVED***
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : null***REMOVED***
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  auth: state.auth
***REMOVED***);

export default connect(mapStateToProps, { deleteComment ***REMOVED***)(CommentItem);
