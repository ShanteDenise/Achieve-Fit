import axios from 'axios'

import { GET_PROFILE, GET_ERRORS, SET_CURRENT_USER} from './types';


//Get current profile

export const getCurrentProfile = () => dispatch => {
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
    axios
    .delete('/profile')
    .then(res =>
        dispatch({
            //set current user to an empty object when this delete function is called
            type: SET_CURRENT_USER,
            payload:{}
        })
        ).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}

