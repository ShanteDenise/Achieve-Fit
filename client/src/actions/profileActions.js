import axios from 'axios'

import { GET_PROFILE, GET_ERRORS, PROFILE_LOADING, SET_CURRENT_USER, CLEAR_CURRENT_PROFILE, GET_PROFILES } from './types';


//Get current profile

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/profile')
    .then(res =>
        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        })
        )
        //return an empty object
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload:{}
            }))

}

//Get All profiles

export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/profile/all')
    .then(res =>
        dispatch ({
            type: GET_PROFILES,
            payload: res.data
        })
        )
        //return an empty object
        .catch(err =>
            dispatch({
                type: GET_PROFILES,
                payload: null
            }))

}
//Profile Loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}
//Clear Profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}



//Get profile by handle

export const getProfileByHandle = (user_id) => dispatch => {
    axios.get(`/profile/${user_id}`)
    .then(res =>
        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        })
        )
        //return an empty object
         .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload:null
            }))

}

//Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post('/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch ({
                type: GET_ERRORS,
                payload: err.response.data
            }))

}



//Delete account & profile
export const deleteAccount = () => dispatch => {   
    if(window.confirm('Are you sure you want to Delete? This can not be changed.')){
    axios
    .delete('/profile')
    .then(res =>  dispatch({
            //set current user to an empty object when this delete function is called
            type: SET_CURRENT_USER,
            payload:{}
            
        })
    ).catch(err =>
        dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
    }
}

