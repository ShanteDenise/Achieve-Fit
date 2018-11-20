import axios from 'axios'

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS***REMOVED*** from './types';
import axios from 'axios';

//Get current profile

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
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

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    ***REMOVED***
***REMOVED***