import { GET_PROFILE, PROFILE_LOADING***REMOVED*** from '../actions/types'


const initialState = {
    profile:null,
    profiles: null,
    loading: false
***REMOVED***

export default function(state = initialState, action){
    switch(action.type){
        //If the profile is loading set state to loading true
        case PROFILE_LOADING:
        return {
            ...state,
            loading: true
        ***REMOVED***
        //If you get the profile loading is set to false and profile will show payload(data)
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