import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import { connect ***REMOVED*** from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import { getPosts ***REMOVED*** from '../../actions/postActions';
import loader from "../../load.gif";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  ***REMOVED***

  render() {
    const { posts, loading ***REMOVED*** = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = loader;
    ***REMOVED***
      postContent = <PostFeed posts={posts***REMOVED*** />;
    ***REMOVED***

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent***REMOVED***
            </div>
          </div>
        </div>
      </div>
    );
  ***REMOVED***
***REMOVED***

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
***REMOVED***;

const mapStateToProps = state => ({
  post: state.post
***REMOVED***);

export default connect(mapStateToProps, { getPosts ***REMOVED***)(Posts);
