import { GET_PROFILE, PROFILE_LOADING***REMOVED*** from '../actions/types'


const initialState = {
    profile:null,
    profiles: null,
    loading: false
***REMOVED***

export default function(state = initialState, action){
    switch(action.type){
        case PROFILE_LOADING:
        return {
            ...state,
            loading: true
        ***REMOVED***
        case GET_PROFILE:
        return {
            ...state,
            profile:action.payload,
            loading:false
        ***REMOVED***
        default: 
        return state
    ***REMOVED***
***REMOVED***