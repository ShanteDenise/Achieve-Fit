import { GET_ERRORS } from '../actions/types'

const initialSate = {}

export default function(state = initialSate, action){
    switch(action.type){
        case GET_ERRORS:
        return action.payload
        default:
        return state;
    }
}