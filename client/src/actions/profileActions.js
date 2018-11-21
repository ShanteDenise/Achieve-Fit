import axios from 'axios'

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, SET_CURRENT_USER***REMOVED*** from './types';


//Get current profile

export const getCurrentProfile = () => dispatch => {
    axios.get('/profile')
    .then(res =>
        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        ***REMOVED***)
        )
        //return an empty object
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload:{***REMOVED***
            ***REMOVED***))

***REMOVED***

//Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post('/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch ({
                type: GET_ERRORS,
                payload: err.response.data
            ***REMOVED***))

***REMOVED***

//Delete account & profile
export const deleteAccount = () => dispatch => {   
    axios
    .delete('/profile')
    .then(res =>
        dispatch({
            //set current user to an empty object when this delete function is called
            type: SET_CURRENT_USER,
            payload:{***REMOVED***
        ***REMOVED***)
        ).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            ***REMOVED***))
***REMOVED***

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    ***REMOVED***
***REMOVED***