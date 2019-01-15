import {
    ADD_POST,
    GET_POSTS,
    GET_POST,
    DELETE_POST,
    POST_LOADING
  ***REMOVED*** from '../actions/types';
  
  const initialState = {
    posts: [],
    post: {***REMOVED***,
    loading: false
  ***REMOVED***;
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case POST_LOADING:
        return {
          ...state,
          loading: true
        ***REMOVED***;
      case GET_POSTS:
        return {
          ...state,
          posts: action.payload,
          loading: false
        ***REMOVED***;
      case GET_POST:
        return {
          ...state,
          post: action.payload,
          loading: false
        ***REMOVED***;
      case ADD_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        ***REMOVED***;
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload)
        ***REMOVED***;
      default:
        return state;
    ***REMOVED***
  ***REMOVED***
  