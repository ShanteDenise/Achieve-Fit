import { SET_CURRENT_USER } from '../actions/types'


const initialSate = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialSate, action){
    switch(action.type){
        default:
        return state;
    }
}