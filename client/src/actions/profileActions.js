import axios from "axios";

import {
  GET_PROFILE,
  GET_ERRORS,
  PROFILE_LOADING,
  SET_CURRENT_USER,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES
***REMOVED*** from "./types";
import { setCurrentUser ***REMOVED*** from "./authActions";

//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      ***REMOVED***)
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      ***REMOVED***)
    );
***REMOVED***;

//Get All profiles

export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/profile/all")
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      ***REMOVED***)
    )
    //return an empty object
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      ***REMOVED***)
    );
***REMOVED***;

//Get profile by handle

export const getProfileByHandle = (handle) => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`/profile/handle/${handle***REMOVED***`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        ***REMOVED***)
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: null
        ***REMOVED***)
      );
  ***REMOVED***;

//Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      ***REMOVED***)
    );
***REMOVED***;

//Delete account & profile
export const deleteAccount = () => dispatch => {
  if (
    window.confirm("Are you sure you want to Delete? This can not be changed.")
  ) {
    axios
      .delete("/profile")
      .then(res =>
        dispatch({
          //set current user to an empty object when this delete function is called
          type: SET_CURRENT_USER,
          payload: {***REMOVED***
        ***REMOVED***)
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        ***REMOVED***)
      );
  ***REMOVED***
***REMOVED***;

//Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  ***REMOVED***;
***REMOVED***;
//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  ***REMOVED***;
***REMOVED***;
