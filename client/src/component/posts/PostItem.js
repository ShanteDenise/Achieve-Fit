import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import classnames from 'classnames';
import { Link ***REMOVED*** from 'react-router-dom';
import { deletePost, addLike, removeLike ***REMOVED*** from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  ***REMOVED***

  onLikeClick(id) {
    this.props.addLike(id);
  ***REMOVED***

  onUnlikeClick(id) {
    this.props.removeLike(id);
  ***REMOVED***

  findUserLike(likes) {
    const { auth ***REMOVED*** = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    ***REMOVED***
      return false;
    ***REMOVED***
  ***REMOVED***

  render() {
    const { post, auth, showActions ***REMOVED*** = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar***REMOVED***
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{post.name***REMOVED***</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text***REMOVED***</p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)***REMOVED***
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-info': this.findUserLike(post.likes)
                    ***REMOVED***)***REMOVED***
                  />
                  <span className="badge badge-light">{post.likes.length***REMOVED***</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)***REMOVED***
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/post/${post._id***REMOVED***`***REMOVED*** className="btn btn-info mr-1">
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)***REMOVED***
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null***REMOVED***
              </span>
            ) : null***REMOVED***
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

PostItem.defaultProps = {
  showActions: true
***REMOVED***;

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  auth: state.auth
***REMOVED***);

export default connect(mapStateToProps, { deletePost, addLike, removeLike ***REMOVED***)(
  PostItem
);
