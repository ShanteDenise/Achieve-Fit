import { combineReducers ***REMOVED*** from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({ 
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
***REMOVED***);