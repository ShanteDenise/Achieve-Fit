import { GET_ERRORS ***REMOVED*** from '../actions/types'

const initialSate = {***REMOVED***

export default function(state = initialSate, action){
    switch(action.type){
        case GET_ERRORS:
        return action.payload
        default:
        return state;
    ***REMOVED***
***REMOVED***