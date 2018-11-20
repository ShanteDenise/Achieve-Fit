import axios from 'axios';

const setAuthToken = token => {
    //If token exists 
    if(token) {
        //Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //If the token is not there then delete it 
        delete axios.defaults.headers.common['Authorization']

        }
    }

    export default setAuthToken;