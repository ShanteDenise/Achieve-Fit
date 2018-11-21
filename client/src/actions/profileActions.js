import axios from 'axios'

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS} from './types';


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

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}