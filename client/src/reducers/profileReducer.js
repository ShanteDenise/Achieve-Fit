import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_PROFILES} from '../actions/types'


const initialState = {
    profile:null,
    profiles: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        //If the profile is loading set state to loading true
        case PROFILE_LOADING:
        return {
            ...state,
            loading: true
        }
        //If you get the profile loading is set to false and profile will show payload(data)
        case GET_PROFILE:
        return {
            ...state,
            profile:action.payload,
            loading:false
        };
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            }
        case GET_PROFILES:
            return {
                ...state,
                profile: action.payload,
                loading: false
            }
        default: 
        return state
    }
}