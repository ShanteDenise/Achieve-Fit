import React, { Component ***REMOVED*** from 'react';
import { connect ***REMOVED*** from 'react-redux';
import { Link ***REMOVED*** from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import loader from '../../load.gif';
import { getPost ***REMOVED*** from '../../actions/postActions';

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  ***REMOVED***

  render() {
    const { post, loading ***REMOVED*** = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = loader;
    ***REMOVED***
      postContent = (
        <div>
          <PostItem post={post***REMOVED*** showActions={false***REMOVED*** />
          <CommentForm postId={post._id***REMOVED*** />
          <CommentFeed postId={post._id***REMOVED*** comments={post.comments***REMOVED*** />
        </div>
      );
    ***REMOVED***

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {postContent***REMOVED***
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  post: state.post
***REMOVED***);

export default connect(mapStateToProps, { getPost ***REMOVED***)(Post);
