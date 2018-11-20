
//Boilerplate code for redux and redux dev tools
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, {}, 
    compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS__&& window.__REDUX_DEVTOOLS_EXTENTION__())
)

export default store
