import { combineReducers ***REMOVED*** from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

//This file combined all the reducers together in one place 
//so you dont have to 
//call all the different reducers. You can just call ./reducers 
export default combineReducers({ 
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
***REMOVED***);