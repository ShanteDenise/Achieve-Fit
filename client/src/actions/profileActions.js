import axios from 'axios'
import { GET_PROFILE, GET_ERRORS***REMOVED*** from './types';


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

//Create profile
export const createProfile= (profileData, history)  => dispatch => {
    axios
        .post('/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data

            ***REMOVED***))
***REMOVED***


