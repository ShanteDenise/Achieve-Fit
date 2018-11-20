import { SET_CURRENT_USER ***REMOVED*** from '../actions/types'
import { SERVFAIL ***REMOVED*** from 'dns';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS ***REMOVED*** from 'constants';


const initialSate = {
    isAuthenticated: false,
    user: {***REMOVED***
***REMOVED***

export default function(state = initialSate, action){
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        ***REMOVED***
        default:
        return state;
    ***REMOVED***
***REMOVED***