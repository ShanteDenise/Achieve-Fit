import { SET_CURRENT_USER } from '../actions/types'
import isEmpty from '../validation/is-empty'

const initialSate = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialSate, action){
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        }
        default:
            return state;
    }
}