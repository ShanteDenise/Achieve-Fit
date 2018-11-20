import axios from 'axios';
import { GET_ERRORS } from './types';

//Register User
export const registerUser = (userData,history) => dispatch => {
    axios
      .post('/users/register', userData)
      .then(res => history.push('/login'))
      .catch(err => 
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        })
      )
   
    };

    //Login - Get User Token
    export const loginUser = (userData) => dispatch => {
        axios.post('/user/login', userData)
        .then(res => {
            //save to local storage
            const { token } = res.data;
            //Set token to local storage
            localStorage.setItem('jwtToken', token);
            //Set token to Auth header
            setAuthToken(token)
        })
//Get any errors 
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                }));
      
    }