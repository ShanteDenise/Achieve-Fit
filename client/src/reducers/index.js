import { combineReducer } from 'redux';
import authReducer from './authReducer';

export default combineReducer({ 
    auth: authReducer
});