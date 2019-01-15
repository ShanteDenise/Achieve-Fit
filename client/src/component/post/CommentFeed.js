import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
    const { comments, postId ***REMOVED*** = this.props;

    return comments.map(comment => (
      <CommentItem key={comment._id***REMOVED*** comment={comment***REMOVED*** postId={postId***REMOVED*** />
    ));
  ***REMOVED***
***REMOVED***

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
***REMOVED***;

export default CommentFeed;
