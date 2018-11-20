import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER ***REMOVED*** from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode'

//Register User
export const registerUser = (userData,history) => dispatch => {
    axios
      .post('/users/register', userData)
      .then(res => history.push('/login'))
      .catch(err => 
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        ***REMOVED***)
      )
   
    ***REMOVED***;

    //Login - Get User Token
    export const loginUser = (userData) => dispatch => {
        axios.post('/user/login', userData)
        .then(res => {
            //save to local storage
            const { token ***REMOVED*** = res.data;
            //Set token to local storage
            localStorage.setItem('jwtToken', token);
            //Set token to Auth header
            setAuthToken(token)
            //Decode token to get user data
            const decoded = jwt_decode(token);
            //Set current user
            dispatch(setCurrentUser(decoded))

        ***REMOVED***)
//Get any errors 
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                ***REMOVED***));
      
    ***REMOVED***
    export const setCurrentUser = (decoded) => {
        return {
            type: SET_CURRENT_USER,
            payload: decoded
        ***REMOVED***
    ***REMOVED***