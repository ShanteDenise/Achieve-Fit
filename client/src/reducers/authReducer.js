import { SET_CURRENT_USER ***REMOVED*** from '../actions/types'
import isEmpty from '../validation/is-empty'

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