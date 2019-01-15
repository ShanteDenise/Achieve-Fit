import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts ***REMOVED*** = this.props;

    return posts.map(post => <PostItem key={post._id***REMOVED*** post={post***REMOVED*** />);
  ***REMOVED***
***REMOVED***

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
***REMOVED***;

export default PostFeed;
