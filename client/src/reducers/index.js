import { combineReducers ***REMOVED*** from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({ 
    auth: authReducer,
    errors: errorReducer
***REMOVED***);