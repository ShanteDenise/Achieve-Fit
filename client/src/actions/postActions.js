import axios from 'axios';

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST
***REMOVED*** from './types';

// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/posts', postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      ***REMOVED***)
    );
***REMOVED***;

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/posts/${id***REMOVED***`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      ***REMOVED***)
    );
***REMOVED***;

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/posts/${id***REMOVED***`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/posts/like/${id***REMOVED***`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/posts/unlike/${id***REMOVED***`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/posts/comment/${postId***REMOVED***`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/posts/comment/${postId***REMOVED***/${commentId***REMOVED***`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  ***REMOVED***;
***REMOVED***;

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  ***REMOVED***;
***REMOVED***;
